const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./database_connection');

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
// get all to_dos
app.get('/to_dos', async (req, res) => {
  try {
    const all_todos = await pool.query('SELECT * FROM to_do;');
    const first_description = all_todos.rows[0].description;
    res.json(first_description);
  } catch (error) {
    res.json(error.message);
  }
});

// add a single to_do
app.post('/to_dos', async (req, res) => {
  try {
    const { description } = req.body;
    const new_to_do = await pool.query(
      'INSERT INTO to_do (description) VALUES ($1) RETURNING *',
      [description]
    );
    res.json(new_to_do.rows[0].to_do_id);
  } catch (error) {
    res.json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
});
