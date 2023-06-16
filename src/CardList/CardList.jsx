import React from 'react';
import "./CardList.css"
import Card from "../Card/Card";
import {cardsMap, cardsAccessories} from "../utils/constants.jsx"


const CardList = ({title, array}) => {
    // console.log(array)
    return (
        <div className="cardList">
            <h1 className="cardList__title">{title}</h1>
            <ul className="cardList__container">
                {
                    array.map((card) => (
                        <Card
                          card={card}
                          key={card.id}
                        />
                        ))
                }
            </ul>
            <div className='cardList__section-button'>
                <button className="cardList__button">ЗАГРУЗИТЬ ЕЩЕ
                    <div className="cardList__button_border"></div>
                </button>


            </div>

        </div>
    );
};

export default CardList;