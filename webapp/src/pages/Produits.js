import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../index.js"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';



function Produits() {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categoryImages = {
        "Electronics": "../img/electronics.jpg",  
        "Clothing": "../img/clothing.jpg",        
        "Accessories": "../img/accessories.jpg",
        "Home Appliances": "../img/homeappliances.jpg",
        "Fitness": "../img/fitness.jpg",  
        "Footwear": "../img/footwear.jpg",   
        "Furniture": "../img/furniture.jpg",   
        "Kitchen": "../img/kitchen.jpg", 
        "Toys": "../img/toys.jpg",   
        "Wearables": "../img/wearables.jpg",        
        "Default": ""           
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('http://127.0.0.1:5000/api/products');
            setProducts(response.data);
            const categories = ['All', ...new Set(response.data.map(product => product.category))];
                setCategories(categories);

                
            
        };
    

        fetchProducts();
    }, []);
    
    const filteredProducts = selectedCategory === 'All'
        ? products  // Si "All" est sélectionné, afficher tous les produits
        : products.filter(product => product.category === selectedCategory);
    

    return (


        <body>
      <Navbar />
      <Container>
        <h1 className='text-center'>Les produits</h1>
        <div className="filter-section my-4 text-center">
            {categories.map(category => (
            <Button
                key={category}
                onClick={() => setSelectedCategory(category)} 
                variant={selectedCategory === category ? 'primary' : 'outile primary'}
                className={selectedCategory === category ? 'btn-primary text-light' : 'btn-outline-primary text-dark'} 
                style={{ marginRight: '10px' }}
            >
            {category}
            </Button>
    ))}
        </div>
        
        <Row xs={1} md={2} className="g-4 my-3">
        {filteredProducts.map((product) => (
            <Col key={product.id} xs={12} md={4}>
              <Card className="mb-5 h-100 shadow">
                <Card.Img
                  variant="top"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                  src={categoryImages[product.category]}
                  
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title style={{ color: '#092A6C' }}>{product.productName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
                  <Card.Text className="">{product.description}</Card.Text>
                  <Card.Text>Prix : {product.price.toString().replace('.', ',')} €</Card.Text>
                  <Card.Text>Quantités restantes : {product.quantityAvailable}</Card.Text>
                  <Button className="btn-custom mt-auto">Reserver</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </body>

    );
}

export default Produits;