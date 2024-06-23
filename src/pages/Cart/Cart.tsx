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
import MakeOrder from "../../components/MakeOrder/MakeOrder";



const CartPage = () => {
    const [productsInCart, setProductsInCart] = useState<CartProductType[]>([])
    const [total, setTotal] = useState<number>(0)
    const token = useSelector((state: RootState)=>state.user.accessToken)
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
    },[cartId, token])

    const updateTotal = () => {
        let price = 0;
        for (let i = 0; i < productsInCart.length; i++) {
            price += productsInCart[i].product.price * productsInCart[i].quantity;
        }
        setTotal(price);
    };
    useEffect(()=>{
        updateTotal()
        console.log(token, cartId)
    }, [productsInCart])

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
                                <CartProduct updateTotal={updateTotal} product={item.product} key={item.id} quantity={item.quantity}/>
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
                        <MakeOrder amount={total} />
                    </div>)}
                </div>
            </section>
    <Footer />
    </>)
}

export default CartPage;