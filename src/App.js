import React, { useState, useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  App: {
    textAlign: 'center',
  },
});

const App = () => {
  const [data, setData] = useState(null);
  const classes = useStyles();

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
  return (
    <div className={classes.App}>
      <h2>Input Employee Hours</h2>
      <form action="">
        <input type="text" placeholder="Employee Id" value="" />
        <input type="text" placeholder="Date Worked" value="" />
        <input type="text" placeholder="Hours Worked" value="" />
      </form>
      {JSON.stringify(data)}
    </div>
  );
};

export default App;
