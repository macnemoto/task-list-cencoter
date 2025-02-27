// import { useState } from 'react'
import SearchInput from './components/SearchInput'
import CardPrices from './components/CardPrices'
import './App.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mx-auto px-8 py-8'>
        <h1 className='text-white text-3xl font-bold text-center'>Lista de precios</h1>
        <SearchInput />
        <CardPrices />
      </div>
    </>
  )
}

export default App
