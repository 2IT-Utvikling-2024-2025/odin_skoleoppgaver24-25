import{useState} from 'react';

function DeleteProductForm() {
    const [ProductId, setProductId] = useState('');
    const [Message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/api/v1/products/${ProductId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setMessage("Product:" + ProductId + "deleted successfully!");
            }
            else {
                console.error('Failed to delete product');
            }
        }
        catch (error) {
            console.error(error);
        }

    };

    return (
        <div>
            <h2>Delete Product</h2>
            <form onSubmit={handleSubmit}>
                <label> Product ID: </label>
                <input type="number" value={ProductId} onChange={(e) => setProductId(e.target.value)} />
                <button type="submit">Delete Product</button>
            </form>
            {Message && <p>{Message}</p>}
        </div>
    );
};

export default DeleteProductForm;