import React from 'react';
import {Link} from "react-router-dom";
import './Main.css'
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className='main'>
            <div className="main__container">
                <div className="main__container-text">
                    <div className='main__circle'></div>
                    <div className="main__container-title">
                        <h1 className='main__title'>ИНДИВИДУАЛЬНОСТЬ</h1>
                        <h2 className='main__subtitle'>В ТВОИХ РУКАХ!</h2>
                        <p className='main__text'>Coccinelle более 40 лет производит сумки и аксессуары класса премиум,
                            являясь синонимом утончённого стиля и итальянского дизайна. Бренд быстро
                            стал популярным, благодаря изысканному дизайну, качественной натуральной
                            коже и вниманию к деталям.
                        </p>
                    </div>

                    <Link to='/product'><button className='main__button'>ВСЕ ТОВАРЫ COCCINELLE</button></Link>

                </div>
                <div className="main__container-img">
                    <div className='main__img'/>
                </div>
            </div>
        </div>
    );
};

export default Main;