import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/to_dos')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="AppHeader">
        <img src={logo} className="AppLogo" alt="logo" />
        <p>{!data ? 'Loading...' : data}</p>
      </header>
    </div>
  );
}

export default App;
