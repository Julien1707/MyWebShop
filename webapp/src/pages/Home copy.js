import React, {useState} from "react";
import "../index.css"
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

function Home() {

    const openProduits = () => {
        window.location.href = "/Produits"
    }
    const cardStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: '20px',
        cursor: 'pointer',
        textDecoration: 'none'
    };
    const leftStyle = {
        flex: '0 0 50%',
        padding: '20px',
        backgroundColor: 'black',
        color: 'white'
    };
    const rightStyle = {
        flex: '0 0 50%',

    };
    const imgStyle = {
        height: '300px',
        width: '600px',
        // marginTop: '5px'
    };
    return (
        <body>
 
            <Navbar/>
            <header style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundSize: 'cover', color: 'black', padding: '40px'}}>
                <h1 style={{fontSize: '50px', marginTop: '20px'}}>Site Vitrine</h1>
                <h4 style={{marginTop: '10px',marginBottom: '30px' , fontSize: '20px', textAlign: 'center', color: 'aqua', borderBottom: '1px solid #fff'}}>Boutique en ligne</h4>
                <button style={{padding: '10px 20px', backgroundColor: '#fff', color: '#000', border: 'none', fontSize: '20px', outline: 'none', cursor: 'pointer'}}>Parcourir</button>
            </header>
            <section style={{marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                 <div class="content">
                    <div class="card" style={cardStyle} onClick={() => openProduits()}>
                        <div class="left" style={leftStyle}>
                            <h1>Nos produits </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, temporibus.</p>
                        </div>
                        <div class="right" style={rightStyle}>
                            <img style={imgStyle} src="/img/onlineshop-erstellen.jpg" alt="magasin" />

                        </div>
                    </div>

                    <div class="card" style={cardStyle}>
                        <div class="left" style={leftStyle}>
                            <h1>Reserver un produit</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, temporibus.</p>
                        </div>
                        <div class="right" style={rightStyle}>
                            <img style={imgStyle} src="/img/onlineshop-erstellen.jpg" alt="magasin"/>
                        </div>

                    </div>

                </div>
                

            </section>
            <Footer/>
        </body>

    );
}

export default Home;