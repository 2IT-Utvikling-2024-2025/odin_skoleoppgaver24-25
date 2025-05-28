import { useState } from 'react'
import './App.css'
import ProductList from './Components/ProductList'
import AddProductForm from './Components/AddProductForm'
import DeleteProductForm from './Components/DeleteProductForm'

function App() {
  
  return (
    <>
      <ProductList />
      <AddProductForm />
      <DeleteProductForm />
    </>
  )
}

export default App
