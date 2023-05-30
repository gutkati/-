import React from 'react';
import "./CardList.css"
import Card from "../Card/Card";

const CardList = ({title}) => {
    return (
        <div className="cardList">
            <h1 className="cardList__title">{title}</h1>
            <div className="cardList__container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className='cardList__section-button'>
                <button className="cardList__button">ЗАГРУЗИТЬ ЕЩЕ
                    <div className="cardList__button_border"></div>
                </button>


            </div>

        </div>
    );
};

export default CardList;