
import { useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import PromocodeField from "../../components/PromocodField/PromocodeField";
import CartCss from './Cart.module.css'
import { RootState } from "../../context/store";
import CartProduct from "../CartProduct/CartProduct";
import { Link } from "react-router-dom";
import Divider from '../../img/ico/Divider.png'

const Cart = () => {
    const productsInCart = useSelector((state:RootState)=>state.cart.cartProducts)
    const totalAmount = useSelector((state: RootState)=>state.cart.totalAmount)
    return(
        <>     
        {productsInCart.length > 0 ? (
            <section className={CartCss.section}>
                <div className={CartCss.section__wrapper}>
                    <nav className={CartCss.nav}>
                        <Link to='/'><span className={CartCss.first}>Home</span></Link>
                        <img src={Divider} alt="/" />
                        <Link to='/catalog'><span className={CartCss.second}>Catalog</span></Link>
                    </nav>
                    <div className={CartCss.heading}>
                        <h1 className={CartCss.heading__h1}>Cart</h1>
                        <span>{productsInCart.length} item</span>  
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
            </section>)
            : <EmptyCart/>}
        </>
    )
}


export default Cart