import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/Home';
import Produits from './pages/Produits';


function App() {



    return (
        <Router>
            <Routes>
                <Route path="/Produits" element={<Produits />} />
                <Route path="/Home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
