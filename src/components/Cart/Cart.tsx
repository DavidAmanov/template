import { useSelector } from "react-redux";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import MakeOrder from "../../components/MakeOrder/MakeOrder";
import PromocodeField from "../../components/PromocodField/PromocodeField";
import CartCss from './Cart.module.css'
import { RootState } from "../../context/store";
import CartProduct from "../CartProduct/CartProduct";
import NavBar from "../NavBar/NavBar";
import { useMemo } from "react";

const Cart = () => {
    const linksArray = ['Home', 'Catalog']
    const header = 'Cart'
    const productsInCart = useSelector((state:RootState)=>state.cart.cartProducts)
    const totalAmount = useSelector((state: RootState)=>state.cart.totalAmount)
    const isEmpty = useMemo(() => productsInCart.length === 0, [productsInCart.length]);
    return(
        <>     
        {isEmpty ? 
            <EmptyCart/> :
            (<section className={CartCss.section}>
                <div className={CartCss.section__wrapper}>
                    <NavBar linksArray={linksArray} header={header}/>
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
        </>
    )
}


export default Cart