import React from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

function Home() {
  const openProduits = () => {
    window.location.href = "/Produits";
  };

  // Style du header avec image de fond et overlay pour une meilleure lisibilité
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: "url('/img/onlineshop-erstellen.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "60vh",
    position: "relative",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  };

  const headerContentStyle = {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "12px 30px",
    backgroundColor: "#fff",
    color: "#000",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "20px",
  };

  // Style de la section des cartes avec plusieurs conteneurs flex
  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "40px",
  };

  const cardContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "20px",
    overflow: "hidden",
    cursor: "pointer",
    maxWidth: "800px",
    width: "100%",
  };

  const textContainerStyle = {
    flex: "1",
    padding: "20px",
    backgroundColor: "#000",
    color: "#fff",
  };

  const imageContainerStyle = {
    flex: "1",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  return (
    <>
      <Navbar />
      <main>
        <header style={headerStyle}>
          <div style={overlayStyle}></div>
          <div style={headerContentStyle}>
            <h1 style={{ fontSize: "3em", margin: 0 }}>Site Vitrine</h1>
            <h4
              style={{
                marginTop: "10px",
                fontSize: "1.5em",
                marginBottom: "20px",
              }}
            >
              Boutique en ligne
            </h4>
            <button style={buttonStyle} onClick={openProduits}>
              Parcourir
            </button>
          </div>
        </header>
        <section style={sectionStyle}>
          {/* Première carte */}
          <div style={cardContainerStyle} onClick={openProduits}>
            <div style={textContainerStyle}>
              <h2>Nos produits</h2>
              <p>Découvrez notre sélection de produits de qualité.</p>
            </div>
            <div style={imageContainerStyle}>
              <img
                style={imgStyle}
                src="/img/onlineshop-erstellen.jpg"
                alt="magasin"
              />
            </div>
          </div>
          {/* Deuxième carte */}
          <div style={cardContainerStyle} onClick={openProduits}>
            <div style={textContainerStyle}>
              <h2>Réserver un produit</h2>
              <p>Réservez en quelques clics le produit de vos rêves.</p>
            </div>
            <div style={imageContainerStyle}>
              <img
                style={imgStyle}
                src="/img/onlineshop-erstellen.jpg"
                alt="magasin"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
