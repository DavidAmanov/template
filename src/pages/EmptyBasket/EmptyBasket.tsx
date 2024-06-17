import React from "react";
import Basket from '../../components/EmptyBasket/Basket'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const EmptyBasket = () => {
    return(<>
        <Header />
        <Basket />
        <Footer />
    </>)
}
export default EmptyBasket