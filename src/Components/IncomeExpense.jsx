import React, { useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState'

export default function IncomeExpense() {
  const {transaction} = useContext(GlobalContext);
  const amounts =transaction.map(trans=>trans.amount);
  return (
    <div>
        <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
           ${amounts.filter(item => item > 0)
                        .reduce((acc,item)=> (acc += item),0).toFixed(2)}
                        </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">$
          {amounts.filter(item => item< 0)
                   .reduce((acc,item)=>(acc+= item),0).toFixed(2) *-1                              
                    }</p>
        </div>
      </div>
    </div>
  )
}
