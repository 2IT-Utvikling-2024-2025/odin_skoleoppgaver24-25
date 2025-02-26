import { useState } from 'react'
import './App.css'
import ProductList from './components/productList'
import AddProductForm from './components/AddProductForm'
import EditProductForm from './components/EditProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vi Hjelper Deg AS Nettbutikk</h1>
      <ProductList />
      <AddProductForm />
      <EditProductForm />
    </>
  )
}

export default App
