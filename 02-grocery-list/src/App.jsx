import './App.css'
import groceryCartImg from "./assets/grocery-cart.png";
import { useState, useEffect } from 'react';

function App() {
  const [ inputValue, setInputValue ] = useState( "" );
  const [ groceryItems, setGroceryItems ] = useState( [] );
  const [ isCompleted, setIsCompleted ] = useState( false );

  useEffect( () => { updateCompletedStatus() }, [ groceryItems ] );

  const handleChangeInputValue = ( e ) => {
    setInputValue( e.target.value );
  };

  const handleAddGroceryItem = ( e ) => {
    if ( e.key === "Enter" ) {
      if ( inputValue ) { //check if it is not empty

        const itemIndex = groceryItems.findIndex( item => item.name === inputValue );
        if ( itemIndex === -1 ) {
          setGroceryItems( [ ...groceryItems, { quantity: 1, name: inputValue, completed: false } ] );
        } else {
          const updatedGroceryItems = [ ...groceryItems ];
          updatedGroceryItems[ itemIndex ].quantity++;
          setGroceryItems( updatedGroceryItems );
        }

        setInputValue( "" );
      }
    }
  };

  const updateCompletedStatus = () => {
    if ( groceryItems.length === 0 ) {
      return setIsCompleted( false );
    }

    let isCompleted = true;
    groceryItems.forEach( ( value ) => {
      if ( value.completed === false ) {
        isCompleted = false;
      }
    } );

    setIsCompleted( isCompleted );
  };

  const handleUpdateCompleteStatus = ( status, index ) => {
    const updatedGroceryItems = [ ...groceryItems ];
    updatedGroceryItems[ index ].completed = status;
    setGroceryItems( updatedGroceryItems );
  };

  const handleRemoveItem = ( index ) => {
    let updatedGroceryItems = [ ...groceryItems ];
    updatedGroceryItems.splice( index, 1 );
    setGroceryItems( updatedGroceryItems );
  };

  const renderGroceryList = () => {
    return groceryItems.map( ( item, index ) => (
      <li key={ item.name }>
        <div className="container">
          <input type="checkbox"
            onChange={ ( e ) => handleUpdateCompleteStatus( e.target.checked, index ) }
            value={ item.completed }
            checked={ item.completed } />
          <p>
            { item.name }
            { item.quantity > 1 ? <span> x{ item.quantity }</span> : null }
          </p>
        </div>
        <div>
          <button className="remove-button" onClick={ () => handleRemoveItem( index ) }>X</button>
        </div>
      </li>
    ) );
  };

  return (
    <main className="App">
      <div>
        <div>
          { isCompleted && <h4 className="success">You're Done</h4> }
          <div className="header">
            <h1>Shopping List</h1>
            <img src={ groceryCartImg } alt="" />
            <input type="text"
              className='item-input'
              placeholder="Add an item"
              onChange={ handleChangeInputValue }
              onKeyDown={ handleAddGroceryItem }
              value={ inputValue }
            />
          </div>
        </div>
        <ul>
          { renderGroceryList() }
        </ul>
      </div>
    </main>
  )
}

export default App
