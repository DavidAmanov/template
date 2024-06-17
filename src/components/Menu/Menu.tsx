import React from 'react'
import MenuCss from './Menu.module.css'
import Logo from '../../img/ico/logo.png'
import Cross from '../../img/ico/cross.png'


const Menu = () => {
    return(
        <>
            <section className={MenuCss.menu}>
                <div className={MenuCss.menu}>
                    <div className={MenuCss.menu__head}>
                        <div className={MenuCss.menu__left}>
                            <img className={MenuCss.menu__logo} src={Logo} alt="logo shop" />
                            <div className={MenuCss.menu__name}>MerchShop</div>
                        </div>
                        <button className={MenuCss.button}><img src={Cross} alt="close menu button" /></button>
                    </div>
                    <nav className={MenuCss.nav}>
                        <ul>
                            <li className={MenuCss.menu__point}>
                                <a className={MenuCss.point} href="#">Catalog</a>
                                <ul className={MenuCss.point__gap}>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Clothing</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">T-shirt</a></li>
                                            <li className={MenuCss.item}><a href="#">Longsleeves</a></li>
                                            <li className={MenuCss.item}><a href="#">Hoodie</a></li>
                                            <li className={MenuCss.item}><a href="#">Topics</a></li>
                                        </ul>
                                    </li>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Accs</a>
                                        <ul className={MenuCss.item__wrapper}> 
                                            <li className={MenuCss.item}><a href="#">T-shirt</a></li>
                                            <li className={MenuCss.item}><a href="#">Longsleeves</a></li>
                                            <li className={MenuCss.item}><a href="#">Hoodie</a></li>
                                            <li className={MenuCss.item}><a href="#">Topics</a></li>
                                        </ul>
                                    </li>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Souvenirs</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">T-shirt</a></li>
                                            <li className={MenuCss.item}><a href="#">Longsleeves</a></li>
                                            <li className={MenuCss.item}><a href="#">Hoodie</a></li>
                                            <li className={MenuCss.item}><a href="#">Topics</a></li>
                                        </ul>
                                    </li>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Office</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">T-shirt</a></li>
                                            <li className={MenuCss.item}><a href="#">Longsleeves</a></li>
                                            <li className={MenuCss.item}><a href="#">Hoodie</a></li>
                                            <li className={MenuCss.item}><a href="#">Topics</a></li>
                                        </ul>
                                    </li>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Entire catalog</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">T-shirt</a></li>
                                            <li className={MenuCss.item}><a href="#">Longsleeves</a></li>
                                            <li className={MenuCss.item}><a href="#">Hoodie</a></li>
                                            <li className={MenuCss.item}><a href="#">Topics</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={MenuCss.menu__point}>
                                <a className={MenuCss.point} href="#">To buyers</a>
                                <ul className={MenuCss.point__gap}>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Return&nbsp;Policy</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">Refund money</a></li>
                                            <li className={MenuCss.item}><a href="#">Purchase returns</a></li>
                                            <li className={MenuCss.item}><a href="#">payment methods</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={MenuCss.menu__point}>
                                <a className={MenuCss.point} href="#">Contacts</a>
                                <ul className={MenuCss.point__gap}>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Call&nbsp;us</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">8 (900) 222-22-22</a></li>
                                        </ul>
                                    </li>
                                    <li className={MenuCss.point__wrapper}>
                                        <a className="" href="#">Message&nbsp;us</a>
                                        <ul className={MenuCss.item__wrapper}>
                                            <li className={MenuCss.item}><a href="#">zalupa@gmail.com</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

            </section>
        </>
    )
}

export default Menu