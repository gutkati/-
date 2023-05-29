import React from 'react';
import {Link} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <ul className='footer__list'>
                    <Link to='/' className='footer__input'>ОТДЕЛ ОБСЛУЖИВАНИЯ КЛИЕНТОВ</Link>
                    <Link to='/' className='footer__input'>ОТСЛЕДИТЬ ЗАКАЗ</Link>
                    <Link to='/' className='footer__input'>ПОДАРОЧНАЯ КАРТА</Link>
                    <Link to='/' className='footer__input'>СВЯЗАТЬСЯ С НАМИ</Link>
                </ul>
                <div className='footer__contacts'>
                    <Link to='/' className='footer__item footer__item-telegram' />

                    <Link to='/' className='footer__item footer__item-viber' />

                    <Link to='/' className='footer__item footer__item-whatsApp' />
                </div>
                <Link className= 'footer__button-up' />
            </div>

        </div>
    );
};

export default Footer;