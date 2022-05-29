import {React, useState, useEffect} from 'react'
import './App.css';
import Balance from './Components/Balance'
import History from './Components/History'
import Input from './Components/Input'

function getLocal() {
  return JSON.parse(localStorage.getItem('list')) || []
}


function App() {
  const [transactions, setTransactions] = useState(getLocal)

  
  // useEffect(()=>{
  //   transactions.reduce((res, el)=>{
  //     res+=parseInt(el.amount);
  //     console.log(res);
  //     return res;
  //   }, 0)
  // }, [transactions])

  return (
    <div className="App">
    <h1>Expence Tracker</h1>
      <Balance transactions={transactions}/>
      <History transactions={transactions} setTransactions={setTransactions} />
      <Input transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default App;
