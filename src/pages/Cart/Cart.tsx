import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartCss from './Cart.module.css'
import Divider from '../../img/ico/Divider.png'
import { Link } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import { useSelector } from 'react-redux';
import { RootState } from "../../context/store";
import { CartProductType } from "../../types/types";



const CartPage = () => {
    const [productsInCart, setProductsInCart] = useState<CartProductType[]>([])
    const token = useSelector((state: RootState)=>state.user.token)
    const cartId = useSelector((state: RootState)=>state.user.cart_id)

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/cartProduct/${cartId}`,{
                method: "GET",
                headers:{
                    "Authorization": `Bearer ${token}`,
                }
            })
            const data = await response.json()
            setProductsInCart(data)
            console.log(data)
        } 
        fetchData()
    },[])

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
                    <div className={CartCss.cart}>
                        <div className={CartCss.cart__leftBlock}>
                            {productsInCart.map((item)=>((<CartProduct product={item.product}/>)))}
                            <div className={CartCss.promocode}>
                                <div className={CartCss.promocode__field}>
                                    <input type="text" className={CartCss.promocode__input} placeholder="Promocode" />
                                </div>
                                <div className={CartCss.promocode__text}>
                                    To take advantage of the discount, enter the promotional code
                                </div>
                            </div>
                        </div>
                        <div className={CartCss.cart__rightBlock}>
                            <div className={CartCss.cartTop}>
                                <div className={CartCss.cartTop__line}>
                                    <span className={CartCss.item__text}>1 item worth:</span>
                                    <span className={`${CartCss.item__price} ${CartCss.price_style}`}>Price</span>
                                </div>
                                <div className={CartCss.cartTop__line}>
                                    <span className={CartCss.item__text}>Amount with discounts:</span>
                                    <span className={`${CartCss.item__price} ${CartCss.price_style}`}>Price</span>
                                </div>
                            </div>
                            <div className={CartCss.cartTotal}>
                                <div className={CartCss.totalText}>Total:</div>
                                <div className={`${CartCss.item__price} ${CartCss.price_total}`}>Price</div>
                            </div>
                            <form action="#" className={CartCss.cartBottom}>
                                <button className={`${CartCss.button} ${CartCss.button_cursor} ${CartCss.button_order}`}>Make an order</button>
                                <div className={CartCss.checkbox}>
                                    <input type="checkbox" id="checkbox" name="agree" required />
                                    <span id='checkbox' className={CartCss.checkbox__text}>By clicking on the <a href="#">“Place an order”</a> button, you consent to the processing of personal data</span>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
    <Footer />
    </>)
}

export default CartPage;