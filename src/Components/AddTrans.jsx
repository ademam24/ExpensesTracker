import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';



export default function AddTrans() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);
  
  const onsubmits=(e)=>{
   e.preventDefault();
   const newTransaction ={
    id: Math.floor(Math.random() * 100000000),
   text,
   amount: +amount //to parse it into number not string
   }
   addTransaction(newTransaction);
  }
  return (
    <div>
          <h3>Add new transaction</h3>
      <form id="form" onSubmit={onsubmits}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" onChange={e=>setText(e.target.value)} value={text} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input  type="number" id="amount" onChange={e=>setAmount(e.target.value)} value={amount} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}
