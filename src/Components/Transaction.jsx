import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export default function Transaction({trans}) {
  const { DeleteTransaction} = useContext(GlobalContext);
    const sign = trans.amount >0 ? '+' : '-';
  return (
    <div>
        <li className={trans.amount > 0 ? 'plus' : 'minus'}>
       {trans.text}<span>{sign}${Math.abs(trans.amount)}</span>
       <button onClick={()=>DeleteTransaction(trans.id)} className="delete-btn">x</button>
     </li>
    </div>
  )
}
