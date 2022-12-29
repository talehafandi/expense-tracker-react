import React from 'react'
import '../styles/History.css'



const Transaction = ({text, amount, id, active, transactions, setTransactions}) => {

  function deleteTransaction(e) {
    const transactionid = e.target.parentElement.dataset.id;

    setTransactions(transactions.filter(el=>{
      if (el.id !== transactionid) {
        return true;
      }
    }))

  }


  return (
    <div className={"transaction " + active} key={id} data-id={id}>
      <div className="delete-transaction" onClick={deleteTransaction}>x</div>
      <span className="transaction-name">{text}</span>
      <span className="transaction-cost">{amount}</span>
    </div>
  )
}

export default Transaction