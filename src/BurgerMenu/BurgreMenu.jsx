import React from 'react';
import './BurgerMenu.css'

const BurgerMenu = ({isOpenBurgerMenu, closeBurgerMenu, stopPropagation}) => {
    return (
        <div className={`burgerMenu ${isOpenBurgerMenu ? 'burgerMenu__open' : ''}`} onClick={closeBurgerMenu}>
            <button className='burgerMenu__close'
                    onClick={closeBurgerMenu}
            />
            <div className="burgerMenu__container" onClick={stopPropagation}>
                <ul className='burgerMenu__list'>
                    <li className='burgerMenu__item'><a href="#">МАГАЗИНЫ</a></li>
                    <li className='burgerMenu__item'><a href="#">АКЦИИ И НОВОСТИ</a></li>
                    <li className='burgerMenu__item'><a href="#">КАТАЛОГ</a></li>
                    <li className='burgerMenu__item'><a href="#">КОНТАКТЫ</a></li>
                    <li className='burgerMenu__item'><a href="#">ГЛАВНАЯ</a></li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;