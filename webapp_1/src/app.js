import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://127.0.0.1:5000/api/products');
            setProducts(response.data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="App">
            <h1>My Web Shop</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <h2>{product.productName}</h2>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <p>Quantity Available: {product.quantityAvailable}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
