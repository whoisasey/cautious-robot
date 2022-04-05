import React, { useState, useEffect, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  App: {
    textAlign: 'center',
  },
  form: {
    width: '60%',
    margin: '2rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& input': {
      margin: '0.5rem',
    },
  },
});

const App = () => {
  const [data, setData] = useState(null);
  // const [employeeData, setEmployeeData] = useState('');

  const classes = useStyles();

  const getData = useCallback(async function () {
    try {
      const response = await fetch('/entries');
      const json = await response.json();
      console.log(json);
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
      <form action="" className={classes.form}>
        <input type="text" placeholder="Employee Id" value="" />
        <input type="text" placeholder="Date Worked" value="" />
        <input type="text" placeholder="Hours Worked" value="" />
        <button type="submit">Submit Hours</button>
      </form>
      {data.map(({ date, hoursWorked, employeeId }) => {
        return (
          <ul>
            <li>Employee ID: {employeeId}</li>
            <li>Date: {date}</li>
            <li>Hours Worked: {hoursWorked}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default App;
