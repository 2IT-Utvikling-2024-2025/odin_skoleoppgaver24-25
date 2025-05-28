import {useState, useEffect} from 'react'

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await fetch('http://localhost:3000/api/v1/products/');
                const results = await response.json();
                setProducts(results.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.productID}> {product.productName} - ${product.productPrice} - Product ID:{product.productID}</li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;