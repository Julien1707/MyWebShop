import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

<Container>
                <h1 className="text-center my-4">My Web Shop</h1>
                <Row>
                    {products.map((product, index) => (
                        <Col key={index} md={4} className="mb-4">
                            <Card className="product-card shadow-sm h-100">
                                <Card.Img
                                    variant="top"
                                    src={product.image}
                                    alt={product.productName}
                                    className="product-image"
                                />
                                <Card.Body>
                                    <Card.Title>{product.productName}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text className="text-success">
                                        <strong>{product.price} euros</strong>
                                    </Card.Text>
                                    <Button variant="primary">t'es nul Julien</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

        </div>
    );
}

export default App;
