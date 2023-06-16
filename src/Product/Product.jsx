import React from 'react';
import "./Product.css";
import CardList from "../CardList/CardList";
import {cardsAccessories, cardsMap} from "../utils/constants";
import Footer from "../Footer/Footer";

const Product = () => {
    return (
        <>
            <div className='product'>
                <CardList title={"СУМКИ"}
                          array={cardsMap}

                />

                <CardList title={"КОЖАНЫЕ АКСЕССУАРЫ"}
                          array={cardsAccessories}
                />
            </div>
            <Footer/>
        </>
    );
};

export default Product;