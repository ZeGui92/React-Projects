import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState( 0 );

  const increaseCounter = () => {
    setCount( count + 1 );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ viteLogo } className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={ reactLogo } className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Counter</h2>
      <div className="card">
        <button style={ { marginRight: '10px' } } onClick={ increaseCounter }>Count is { count }</button>
        <button onClick={ function () { setCount( 0 ) } }>Reset counter</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
