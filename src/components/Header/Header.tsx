import React from 'react'
import HeaderCss from './header.module.css'
import menuIcon from '../../img/ico/menu.png'
import logoIcon from '../../img/ico/logo.png'
import profileIcon from '../../img/ico/Profile.png'
import heartIcon from '../../img/ico/Heart.png'
import cartIcon from '../../img/ico/Cart.png'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { useSelector } from 'react-redux'
import { RootState } from '../../context/store'

const Header = () => {
    const countInCart = useSelector((state:RootState)=> state.cart.cartProducts)
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
                        <li><Search /></li>
                        <li>
                            <Link to="/favourites" className={HeaderCss.button}>
                                <img src={heartIcon} alt="favourites" />
                            </Link>
                        </li>
                        <li className={HeaderCss.cartItem}>
                            <span className={HeaderCss.count__cart}>{countInCart.length}</span>
                            <Link to="/cart" className={`${HeaderCss.button} ${HeaderCss.cart}`}>
                                <img src={cartIcon} alt="Cart" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile" className={HeaderCss.button}>
                                <img src={profileIcon} alt="Profile" />
                            </Link>
                        </li>
                    </ul>
                    <div className={HeaderCss.profile__mobile}>
                        <Link to="/favourites" className={HeaderCss.button}>
                                <img src={heartIcon} alt="favourites" />
                        </Link>
                        <Link to="/cart" className={`${HeaderCss.button} ${HeaderCss.cart}`}>
                                <img src={cartIcon} alt="Cart" />
                        </Link>
                        <Link to="/profile" className={HeaderCss.button}>
                            <img src={profileIcon} alt="Profile" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header