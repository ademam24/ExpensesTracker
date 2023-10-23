import React ,{createContext,useReducer} from "react";

import AppReducer from './AppReducer'



const initState ={
    transactions: [  
         { id: 1, text: 'Flower', amount: -20 }, // if it is expense it would be negative
         { id: 2, text: 'Salary', amount: 300 }, // and if it is income it would be positive 
         { id: 3, text: 'Book', amount: -10 },
         { id: 4, text: 'Camera', amount: 150 }]
       
    
}
 

 export const  GlobalContext =createContext(initState);

 export const GlobalProvider =({children})=>{
     const [state,dispatch] = useReducer(AppReducer,initState);
     const DeleteTransaction= (id)=>{
        dispatch({
            type: 'DeleteTrans',
            payload :id
        })
     }
     const addTransaction =(transaction)=>{
        dispatch({
            type:'ADD',
            payload:transaction
        })
     }
     return(
        <GlobalContext.Provider value={{
            transaction: state.transactions,
            DeleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
     );
 }
