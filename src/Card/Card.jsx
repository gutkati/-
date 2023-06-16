import React from 'react';
import "./Card.css"

const Card = ({card}) => {
    return (
        <li className="card">
            <div className="card__section-img">
                <img className="card__img" src={card.img} alt={card.description}/>
            </div>
            <div className="card__section-info">
                <h2 className="card__title">{card.collection}</h2>
                <p className="card__subtitle">{card.description}</p>
                <p className="card__price">{card.price}</p>
                <span className="card__color">ДОСТУПНЫЕ ЦВЕТА</span>
            </div>

        </li>
    );
};

export default Card;

// <div className="card__section-info">
//                 <h2 className="card__title">COCCINELLE NICO</h2>
//                 <p className="card__subtitle">Ручная сумка из зернистой кожи</p>
//                 <p className="card__price">€320</p>
//                 <span className="card__color">ДОСТУПНЫЕ ЦВЕТА</span>
//             </div>