import Header from "./Header/Header";
import Main from "./Main/Main";
import './App.css';
import Footer from "./Footer/Footer";
import React, {useState} from "react";
import CardList from "./CardList/CardList";
import {cardsMap, cardsAccessories} from "./utils/constants.jsx"

function App() {


    return (
        <div>
            <Header />
            <Main />
            <CardList title={"СУМКИ"}
                      array={cardsMap}

            />

            <CardList title={"КОЖАНЫЕ АКСЕССУАРЫ"}
                      array={cardsAccessories}
            />
            <Footer />
        </div>
    );
}

export default App;
