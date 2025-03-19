import React from "react";
import "../index.css";

const footerStyle = {
  marginTop: "40px",
  borderTop: "5px solid gray",
  backgroundColor: "#000",
  color: "#fff",
  padding: "30px 100px",
  fontFamily: "'Montserrat', sans-serif",
};

const headerStyle = {
  borderBottom: "1px solid #fff",
  width: "20%",
  paddingBottom: "5px",
  marginBottom: "20px",
};

const servicesContainerStyle = {
  marginTop: "-10px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const serviceStyle = {
  margin: "10px",
  padding: "10px",
  flex: "1 1 250px",
};

const contactStyle = {
  color: "grey",
  marginTop: "20px",
  textAlign: "center",
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <h1 style={headerStyle}>Nos services</h1>
      <div style={servicesContainerStyle}>
        <div style={serviceStyle}>
          <h3>Livraisons</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            aliquid!
          </p>
        </div>
        <div style={serviceStyle}>
          <h3>Paiement en ligne</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            aliquid!
          </p>
        </div>
        <div style={serviceStyle}>
          <h3>Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            aliquid!
          </p>
        </div>
      </div>
      <p id="contact" style={contactStyle}>
        00 00 00 00 0 &copy;2024, Site Vitrine.
      </p>
    </footer>
  );
}

export default Footer;
