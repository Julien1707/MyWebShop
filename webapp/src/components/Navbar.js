import React from 'react';
import "../index.css"

const aStyle = {
    color: '#000',
    marginRight: '10px',
    borderBottom: '1px solid #000',
    paddingBottom: '5px'

};

function Navbar() {
    return (
    <nav style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', borderBottom: '5px solid grey'}}>
        <h1 style={{color: 'grey', fontSize: '30px', margin:  '25px'}}><strong>Site Vitrine</strong></h1>
        <div class="onglets" style={{marginTop: '3px', marginLeft: '300px'}}>
             <a href="/Home" style={aStyle}>Home</a>
             <a href="/Produits" style={aStyle}>Nos produits</a>
             <a href="#contact" style={aStyle}>Contact</a>
            
        </div>
    </nav>
    )
}
export default Navbar;




