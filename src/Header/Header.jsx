import React, {useState} from 'react';
import './Header.css'
import BurgerMenu from "../BurgerMenu/BurgreMenu";

const Header = () => {
    const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false)

    const openBurgerMenu = () => {
        setIsOpenBurgerMenu(true)
    }

    const closeBurgerMenu = () => {
        setIsOpenBurgerMenu(false)
    }

    const stopPropagation = (e) => {
    e.stopPropagation()
  }

    return (
        <header className='header__container'>
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
                    <button className='header__burger header__burger_visible'
                            onClick={openBurgerMenu}
                    />
                </div>
            </div>
            <BurgerMenu isOpenBurgerMenu={isOpenBurgerMenu}
                        closeBurgerMenu={closeBurgerMenu}
                        stopPropagation={stopPropagation}
            />
        </header>
    );
};

export default Header;