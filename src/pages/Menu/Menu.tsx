import React from "react";
import CatalogCategory from '../../components/Menu/CatalogCategory'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import MenuCss from './Menu.module.css'
import logo from '../../img/big_logo.png'

const MenuPage = () => {
    return(<>
        <Header />
        <main className={MenuCss.page__container}>
            <section className={MenuCss.links}>
                <CatalogCategory />
                <Link to="/about">About Us</Link>
                <Link to="/contacts">Contacts</Link>
            </section>   
            <div className={MenuCss.logo}>
                <img src={logo} alt="logo" />
            </div>
        </main>
        <Footer />
    </>)
} 
export default MenuPage;