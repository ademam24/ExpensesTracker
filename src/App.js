
import './App.css'
import AddTrans from './Components/AddTrans';
import Balance from './Components/Balance';
import { Header } from './Components/Header';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';

import { GlobalContext, GlobalProvider } from './Context/GlobalState';



function App() {
 


  return (
   <GlobalProvider>
        <Header/>
    <div className='container'>
   
    <Balance/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTrans/>
    
    </div>
   </GlobalProvider>

   
  );
}

export default App;
