import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'

export default function Balance() {
  const {transaction} =useContext(GlobalContext);

 const amounts =transaction.map(trans=>trans.amount); // return array of amounts
 const Total = amounts.reduce((acc,item)=> (acc+=item) ,0).toFixed(2); // accumulate the amount
 
  return (
  <>
     <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">${Total}</h1>
      </div>
  </>
  )
}
