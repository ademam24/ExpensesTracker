import React , {useContext}from 'react'
import {GlobalContext} from '../Context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {

  const {transaction} = useContext(GlobalContext);
     
  return (
    <div>
        <h3>History</h3>
      <ul id="list" className="list">
   {transaction.map(trans=>(
      <Transaction key={trans.id} trans={trans}/>
   ))}
      </ul>
    </div>
  )
}
