import Header from "./Header/Header";
import Main from "./Main/Main";
import './App.css';
import React, {useState} from "react";
import Product from "./Product/Product";
import {Route, Routes, useLocation} from 'react-router-dom'

function App() {
    const {pathname} = useLocation()

    return (
        <div>
            {
                pathname === '/' ||
                pathname === '/product' ? (
                    <Header/>
                ) : ("")
            }

            <Routes>
                <Route exact path="/"
                       element={<Main/>}
                />

                <Route
                    path="/product"
                    element={<Product/>}
                />

            </Routes>
        </div>
    );
}

export default App;
