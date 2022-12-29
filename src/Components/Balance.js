import React from 'react'
import '../styles/Balance.css'


const Balance = ({transactions}) => {

  let inc =0, exp = 0;
  function getTotal() {
    return transactions.reduce((res, el)=>{
     res += parseInt(el.amount);

     // calculating income and expense
     if (el.amount>0) {
       inc += parseInt(el.amount);
       console.log(inc);
     }else exp += parseInt(el.amount);
     
     return res;
   }, 0)   
  }


  return (
    <div className="balance-container">
      <section className="total-balance">
        <h3>Your Balance:</h3>
        <h1>${getTotal()}</h1>
      </section>
      <section className="income-expence">
        <div>
          <h3>Income</h3>
          <h1 className="income">${inc}</h1>
        </div>
        <span className="line"></span>
        <div>
          <h3>Expence</h3>
          <h1 className="expense">${exp*(-1)}</h1>
        </div>
      </section>
    </div>
  )
}

export default Balance