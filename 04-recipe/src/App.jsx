import './App.css'
import CardList from './components/CardList'
import Header from './components/Header'

function App() {
  return (
    <div className='App'>
      <main className='main_container'>
        <Header />
        <CardList />
      </main>
    </div>
  )
}

export default App