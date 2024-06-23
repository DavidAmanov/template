import React, { useEffect, } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartCss from './Cart.module.css'
import Divider from '../../img/ico/Divider.png'
import { Link } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../context/store";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import { useDispatch } from "react-redux";
import { counterAmount, fetchProductsInCart } from "../../context/cartSlice";



const CartPage = () => {
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(fetchProductsInCart())
        dispatch(counterAmount())
    }, [dispatch])

    const productsInCart = useSelector((state: RootState)=>state.cart.cartProducts)
    const totalAmount = useSelector((state: RootState)=>state.cart.totalAmount)
    console.log(totalAmount)

    return(<>
    <Header />
    <section className={CartCss.section}>
                <div className={CartCss.section__wrapper}>
                    <nav className={CartCss.nav}>
                        <Link to='/'><span className={CartCss.first}>Home</span></Link>
                        <img src={Divider} alt="/" />
                        <Link to='/catalog'><span className={CartCss.second}>Catalog</span></Link>
                    </nav>
                    <div className={CartCss.heading}>
                        <h1 className={CartCss.heading__h1}>Cart</h1>
                        <span>1 item</span>  
                    </div>
                    {productsInCart.length > 0 &&(<div className={CartCss.cart}>
                        <div className={CartCss.cart__leftBlock}>
                            {productsInCart.map((item)=>((
                                <CartProduct product={item.product} key={item.product.id} quantity={item.quantity}/>
                            )))}
                            <div className={CartCss.promocode}>
                                <div className={CartCss.promocode__field}>
                                    <input type="text" className={CartCss.promocode__input} placeholder="Promocode" />
                                </div>
                                <div className={CartCss.promocode__text}>
                                    To take advantage of the discount, enter the promotional code
                                </div>
                            </div>
                        </div>
                        <MakeOrder amount={totalAmount} />
                    </div>)}
                </div>
            </section>
    <Footer />
    </>)
}

export default CartPage;