const express = require('express');
const pool = require('./database_connection');

const PORT = process.env.PORT || 5000;
const app = express();

// ROUTES
// get all to_dos
app.get('/to_dos', async (req, res) => {
  try {
    const all_todos = await pool.query('SELECT * FROM to_do;');
    const first_description = all_todos.rows[0].description;
    res.json(first_description);
  } catch (err) {
    res.json(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line no-console
});
