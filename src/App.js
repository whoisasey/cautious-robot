import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(null);

  const getData = useCallback(async function () {
    try {
      const response = await fetch('/entries');
      const json = await response.json();
      if (!response.ok) {
        throw new Error('There was an error processing your request');
      }
      setData(json);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);
  return <div className="App">{JSON.stringify(data)}</div>;
};

export default App;
