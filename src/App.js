import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';

const App = () => {
  return (
    <div className='container'>
      <h1 className='mt-3'>My Expense Tracker</h1>

      <div className='row mt-3'>

        <div className='col-sm'><Budget/></div>
        <div className='col-sm'><ExpenseTotal/></div>
        <div className='col-sm'><Balance/></div>

      </div>
      <h3 className='mt-3'>Expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ExpenseList />
        </div>
      </div>

    </div>
  );
};

export default App;


