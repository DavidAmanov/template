import React from 'react'
import HeaderCss from './header.module.css'
import menuIcon from '../../img/Menu.svg'
import logoIcon from '../../img/logo.png'
import profileIcon from '../../img/Profile.svg'
import searchIcon from '../../img/search.svg'
import heartIcon from '../../img/Heart.svg'
import cartIcon from '../../img/Cart.svg'

const Header = () => {
    return(
        <header className={HeaderCss.header}>
            <div className={HeaderCss.menu_container}>
                <div className={HeaderCss.container} style={{width:'15%'}}>
                    <img src={menuIcon} alt='menu icon'/>
                    <span>Menu</span>
                </div>
            </div>
            <div className={HeaderCss.logo_container}>
                <img src={logoIcon} alt='logo icon' style={{width:'40px', height:'40px', border: "1px solid", borderColor:"white", backgroundColor:"white"}}/>
            </div>
            <div className={HeaderCss.icons_container}>
                <div className={HeaderCss.container} style={{width:'50%'}}>
                    <img src={searchIcon} alt='search icon'/>
                    <img src={heartIcon} alt='heart icon'/>
                    <img src={cartIcon} alt='cart icon'/>
                    <img src={profileIcon} alt='profile icon'/>
                </div>
            </div>
        </header>
    )
}

export default Header