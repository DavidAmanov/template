import React from 'react'
import HeaderCss from './header.module.css'
import menuIcon from '../../img/ico/menu.png'
import logoIcon from '../../img/ico/logo.png'
import profileIcon from '../../img/ico/Profile.png'
import searchIcon from '../../img/ico/Search.png'
import heartIcon from '../../img/ico/Heart.png'
import cartIcon from '../../img/ico/Cart.png'

const Header = () => {
    return(
        <header className={HeaderCss.header}>
            <div className={HeaderCss.header__wrapper}>
                <div  className={HeaderCss.header__menu}>
                    <a href="#">
                        <button className={`${HeaderCss.button} ${HeaderCss.button_cursor} ${HeaderCss.button_menu}`}>
                            <img src={menuIcon} alt="Menu icon" />
                            <p className={HeaderCss.button__menuheader}>Menu</p>
                        </button>
                    </a>
                </div>
                <img className={HeaderCss.header__logo} src={logoIcon} alt="Logo of the market" />
                <div>
                    <ul className={HeaderCss.header__rightblock}>
                        <li><a href="#"><button className={HeaderCss.button}><img src={searchIcon} alt="Search" /></button></a></li>
                        <li><a href="#"><button className={HeaderCss.button}><img src={heartIcon} alt="favourites" /></button></a></li>
                        <li><a href="#"><button className={HeaderCss.button}><img src={cartIcon} alt="Cart" /></button></a></li>
                        <li><a href="#"><button className={HeaderCss.button}><img src={profileIcon} alt="Profile" /></button></a></li>
                    </ul>
                </div>
                <div className={`${HeaderCss.header__rightblock} ${HeaderCss.rightblock_hidden}`}>
                    <li><a href="#"><img src={searchIcon} alt="Search" /></a></li>
                    <li><a href="#"><img src={profileIcon} alt="Profile" /></a></li>
                </div>
            </div>
        </header>
    )
}

export default Header