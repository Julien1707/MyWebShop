import React from 'react';
import "../index.css"

const serviceStyle = {
    marginRight: '30px', padding: '10px'
};
const pStyle = {
    maxwidth: '300px'
};

function Footer() {
    return (
        <footer style={{margintop: '40px', borderTop: '5px solid gray', backgroundColor: 'black', color: 'white', padding: '30 px 100px'}}>
        <h1 style={{borderBottom: '1px solid white', width: '20%', paddingBottom: '5px' }}>Nos services</h1>
        <div style={{margintop: '-10px', display: 'flex', flexWrap: 'wrap'}}>
            <div style={serviceStyle}>
                <h3>Livraisons</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquid!</p>
            </div>
            <div style={serviceStyle}>
                <h3>Paiement en ligne</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquid!</p>
            </div>
            <div style={serviceStyle}>
                <h3>service</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, aliquid!</p>
            </div>
        </div>
        <p id="contact" style={{color: 'grey',marginBottom: '-50px'}}>00 00 00 00 0 &copy;2024, Site Vitrine.</p>
    </footer>
    );
};

export default Footer;
