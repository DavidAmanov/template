import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartCss from './Cart.module.css'
import Divider from '../../img/ico/Divider.png'
import { Link } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../context/store";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import PromocodeField from "../../components/PromocodField/PromocodeField";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { useDispatch } from "react-redux";
import { fetchProductsInCart } from "../../context/cartSlice";




const CartPage = () => {
    const [items, setItems] = useState(0)
    const productsInCart = useSelector((state: RootState)=>state.cart.cartProducts)
    const totalAmount = useSelector((state: RootState)=>state.cart.totalAmount)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        // dispatch(fetchProductsInCart())
        let items = 0 
        productsInCart.forEach((product)=>{
            items +=1
        })
        setItems(items)
    },[])

    return(<>
    <Header />
        {productsInCart.length ===0 && (<EmptyCart/>)}
        {productsInCart.length !==0 &&(<section className={CartCss.section}>
            <div className={CartCss.section__wrapper}>
                <nav className={CartCss.nav}>
                    <Link to='/'><span className={CartCss.first}>Home</span></Link>
                    <img src={Divider} alt="/" />
                    <Link to='/catalog'><span className={CartCss.second}>Catalog</span></Link>
                </nav>
                <div className={CartCss.heading}>
                    <h1 className={CartCss.heading__h1}>Cart</h1>
                    <span>{items} item</span>  
                </div>
                {productsInCart.length > 0 &&(
                <div className={CartCss.cart}>
                    <div className={CartCss.cart__leftBlock}>
                        {productsInCart.map((item, index)=>((
                            <CartProduct 
                                product={item.product} 
                                key={item.id} 
                                quantity={item.quantity}
                                orderPage={false}
                                numberProduct={index+1}
                                />
                        )))}
                        <PromocodeField />
                    </div>
                    <div>
                        <MakeOrder amount={totalAmount} orderPage={false}/>
                    </div>
                </div>)}
            </div>
        </section>)}
    <Footer />
    </>)
}

export default CartPage;