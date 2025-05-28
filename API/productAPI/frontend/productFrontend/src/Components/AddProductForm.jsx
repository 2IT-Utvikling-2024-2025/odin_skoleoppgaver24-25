import {useState} from 'react'

function AddProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/v1/products/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productName: name, productPrice: price })
            });

            if (response.ok) {
                const result = await response.json();
                setMessage("Product:" + name + "added successfully!");
            } else {
                console.error('Failed to add product');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>
            <label htmlFor="product-name">Name:</label>
            <input
                id="product-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="product-price">Price:</label>
            <input
                id="product-price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add Product</button>
            {Message && <p>{Message}</p>}
        </form>
    );
}

export default AddProductForm;