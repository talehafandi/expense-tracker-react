import {React, useState, useEffect} from 'react'
import '../styles/Input.css'
import { v4 as uuid } from 'uuid';



const Input = ({transactions, setTransactions}) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState("");


    function isValid(amount) {
      if (amount.trim()[0] === '+' || amount.trim()[0] === '-') {
        return true;
      }else {
        alert('Please let us know if it is income or expense by using either "+" or "-" operators');
        return false
      };
    }

    function submitHandler(e) {
        e.preventDefault();
        if (text.trim() !== '' && !isNaN(amount) && amount.trim() !== '' && isValid(amount)) {
          let obj = {
            text: text,
            amount: amount,
            id: uuid()
          }
          // console.log(obj);

          setTransactions([...transactions, obj])
          // console.log(transactions);
          setText('');
          setAmount('');    
        }
        
    }

    useEffect(() => {
      localStorage.setItem('list', JSON.stringify(transactions));
    }, [transactions]) 

  return (
    <div>
        <h1>Add new Transaction</h1>
        <form className="transaction-form" onSubmit={submitHandler}>
            <label htmlFor="text">Text</label>
            <input  type="text" 
                    id="text"
                    value={text}
                    onChange={(e)=>{setText(e.target.value)}}
                    placeholder="Here you go"
                    />
            <label htmlFor="amount" >Amount</label>
            <input  type="text"
                    id="amount"
                    value={amount}
                    onChange={(e)=>{setAmount(e.target.value)}}
                    placeholder="Here you go" />
            <button type="submit" className="submit">Submit</button>
        </form>
    </div>
  )
}

export default Input