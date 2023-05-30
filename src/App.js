import Header from "./Header/Header";
import Main from "./Main/Main";
import './App.css';
import Footer from "./Footer/Footer";
import React from "react";
import CardList from "./CardList/CardList";

function App() {
    return (
        <div>
            <Header />
            <Main />
            <CardList title={"СУМКИ"}/>
            <CardList title={"КОЖАНЫЕ АКСЕССУАРЫ"}/>
            <CardList title={"КОШЕЛЬКИ"}/>
            <Footer />
        </div>
    );
}

export default App;
