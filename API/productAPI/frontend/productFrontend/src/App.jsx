import './App.css'
import ProductList from './Components/ProductList'
import AddProductForm from './Components/AddProductForm'
import DeleteProductForm from './Components/DeleteProductForm'

function App() {
  return (
    <>
      <header className="store-header">
        <h1>Komplett</h1>
        <nav>
          <a href="#">Products</a>
          <a href="#">Add Product</a>
          <a href="#">Delete Product</a>
        </nav>
      </header>
      <div className="header-image-wrapper">
        <img
          className="header-image"
          src="https://images.pexels.com/photos/15249470/pexels-photo-15249470.jpeg?cs=srgb&dl=pexels-pramodtiwari-15249470.jpg&fm=jpg"
          alt="Header"
        />
      </div>
      <main className="store-main">
        <ProductList />
        <section className="forms-section">
          <AddProductForm />
          <DeleteProductForm />
        </section>
      </main>
    </>
  )
}

export default App
