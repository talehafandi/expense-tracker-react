import React from 'react'
import Transaction from "./Transaction";
import '../styles/History.css'


const History = ({transactions, setTransactions}) => {

  return (
    <div>
      <h2>History</h2>
      <ul className="recent-transactions">
        {
          transactions.map((el)=>(
            <Transaction  transactions={transactions} 
                          setTransactions={setTransactions} 
                          text={el.text} 
                          amount={el.amount} 
                          id={el.id}
                          active={(el.amount>0) ? "transaction-green" : "transaction-red"} />
          ))
        }
      </ul>
    </div>
  )
}

export default History