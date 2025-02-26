import {useState} from 'react'

function AddProductForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/v1/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, price})
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
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </label>
                <button type="submit">Add Product</button>
            </form>
           {Message && <p>{Message}</p>}
        </div>
    );
}

export default AddProductForm;