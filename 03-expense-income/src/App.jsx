import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [ transaction, setTransaction ] = useState( { name: "", value: "", type: "income" } );
  const [ transactions, setTransactions ] = useState( [] );
  const [ showError, setShowError ] = useState( { transactionName: false, transactionValue: false } );
  const [ total, setTotal ] = useState( 0 );

  useEffect( () => { updateTotal() }, [ transactions ] );

  const updateTotal = () => {
    let newTotal = 0;
    for ( let transaction of transactions ) {
      if ( transaction.type === "income" ) {
        newTotal = newTotal + parseFloat( transaction.value );
      } else {
        newTotal = newTotal - parseFloat( transaction.value );
      }
    }

    setTotal( newTotal );
  }

  const handleUpdateTransaction = ( e ) => {
    const inputValue = e.target.value;
    setTransaction( { ...transaction, [ e.target.name ]: inputValue } );
  };

  const addNewTransaction = () => {
    const isTransactionNameEmpty = transaction.name === "" ? true : false;
    const isTransactionValueEmpty = transaction.value === "" ? true : false;
    setShowError( { transactionName: isTransactionNameEmpty, transactionValue: isTransactionValueEmpty } );

    if ( !isTransactionNameEmpty && !isTransactionValueEmpty ) {
      const newTransaction = {
        name: transaction.name,
        value: parseFloat( transaction.value ).toFixed( 2 ),
        type: transaction.type,
        date: new Date().toDateString(),
        id: uuidv4()
      };
      setTransactions( [ newTransaction, ...transactions ] );

      setTransaction( { name: "", value: "", type: "income" } ); //Clear current transaction
    }
  }

  const renderTotal = () => {
    if ( total > 0 ) {
      return <h1 className="total-text success">+{ total }</h1>;
    } else if ( total < 0 ) {
      return <h1 className="total-text danger">{ total }</h1>;
    } else {
      return <h1 className="total-text">0</h1>;
    }
  }

  const renderTransactionCards = () => {
    const transactionCards = transactions.map( ( transaction ) => {
      const valueClass = "amount-text " + ( transaction.type === "income" ? "success" : "danger" );
      const formatedValue = ( transaction.type === "income" ? "+" : "-" ) + "$" + transaction.value;
      return (
        <div className="card" key={ transaction.id }>
          <div className="card-info">
            <h4>{ transaction.name }</h4>
            <p>{ transaction.date }</p>
          </div>
          <p className={ valueClass }>{ formatedValue }</p>
        </div>
      )
    } );

    return transactionCards;
  }

  return (
    <main>
      <div>
        { renderTotal() }
        <div className="input-container">
          <input type="text" name="name" placeholder="Income or expense"
            value={ transaction.name }
            onChange={ handleUpdateTransaction }
            style={ showError.transactionName === true ? { borderColor: "rgb(206, 76, 76)" } : null }
          />
          <input type="number" name="value" placeholder="Enter a value"
            value={ transaction.value }
            onChange={ handleUpdateTransaction }
            style={ showError.transactionValue === true ? { borderColor: "rgb(206, 76, 76)" } : null }
          />
          <select name="type" onChange={ handleUpdateTransaction } value={ transaction.type }>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button onClick={ addNewTransaction }>+</button>
        </div>
        <div>
          { renderTransactionCards() }
        </div>
      </div>
    </main>
  );
}

export default App;