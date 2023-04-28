import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header__container'>
            <div className='header__section'>
                <div className='header__logo'>
                </div>
                <div className="header__nav">
                    <ul className='header__list'>
                        <li className='header__list-item'><a href="#">МАГАЗИНЫ</a></li>
                        <li className='header__list-item'><a href="#">АКЦИИ И НОВОСТИ</a></li>
                        <li className='header__list-item'><a href="#">КАТАЛОГ</a></li>
                        <li className='header__list-item'><a href="#">КОНТАКТЫ</a></li>
                    </ul>
                    <div className="header__sale">
                        <a href="#" className='header__sale-link'>SALE</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;