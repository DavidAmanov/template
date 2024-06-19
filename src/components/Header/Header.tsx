import React from 'react'
import HeaderCss from './header.module.css'
import menuIcon from '../../img/ico/menu.png'
import logoIcon from '../../img/ico/logo.png'
import profileIcon from '../../img/ico/Profile.png'
import searchIcon from '../../img/ico/Search.png'
import heartIcon from '../../img/ico/Heart.png'
import cartIcon from '../../img/ico/Cart.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className={HeaderCss.header}>
            <div className={HeaderCss.header__wrapper}>
                <div  className={HeaderCss.header__menu}>
                        <Link to="/menu" className={`${HeaderCss.button} ${HeaderCss.button_cursor} ${HeaderCss.button_menu}`}>
                            <img src={menuIcon} alt="Menu icon" />
                            <p className={HeaderCss.button__menuheader}>Menu</p>
                        </Link>
                </div>
                <div className={HeaderCss.header__cont}>
                    <Link to="/">
                        <img className={HeaderCss.header__logo} src={logoIcon} alt="Logo of the market" />
                    </Link>
                </div>
                <div>
                    <ul className={HeaderCss.header__rightblock}>
                        <li><button className={HeaderCss.button}><img src={searchIcon} alt="Search" /></button></li>
                        <li><button className={HeaderCss.button}><img src={heartIcon} alt="favourites" /></button></li>
                        <li><button className={HeaderCss.button}><img src={cartIcon} alt="Cart" /></button></li>
                        <li><button className={HeaderCss.button}><img src={profileIcon} alt="Profile" /></button></li>
                    </ul>
                </div>
                <div className={`${HeaderCss.header__rightblock} ${HeaderCss.rightblock_hidden}`}>
                    <li><img src={searchIcon} alt="Search" /></li>
                    <li><img src={profileIcon} alt="Profile" /></li>
                </div>
            </div>
        </header>
    )
}

export default Header