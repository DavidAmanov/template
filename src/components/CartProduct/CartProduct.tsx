import React, { useEffect } from 'react'
import CartProductCss from './CartProduct.module.css'
import Trash from '../../img/ico/trash.png'
import { Product } from '../../context/catalogSlice'
import ButtonGray from '../Button/ButtonGray';
import { AppDispatch } from '../../context/store';
import { useDispatch } from 'react-redux';
import { changeProductQuantity, counterAmount, removeProduct } from '../../context/cartSlice';

interface ProductProps {
    product: Product;
    quantity: number;
    orderPage: boolean
    numberProduct: number
}


const CartProduct:React.FC<ProductProps> = ({product, quantity, orderPage, numberProduct}) => {

    const dispatch = useDispatch<AppDispatch>()

    
    const plus = () => {
        const quantity: number = 1
        dispatch(changeProductQuantity({quantity: quantity, productId: product.id}))
    }
    
    const minus = () =>{
        const quantity: number = -1
        dispatch(changeProductQuantity({quantity: quantity, productId: product.id}))
    }
    
    const removeProductFromCart = () =>{
        dispatch(removeProduct({quantity: quantity, productId: product.id}))
    }

    useEffect(()=>{
        dispatch(counterAmount())
    },[plus, minus, removeProductFromCart])
    return(
       <>
        <div className={orderPage ? CartProductCss.itemOrder : CartProductCss.item}>
            <div className={CartProductCss.item__banner}>
                {orderPage && (<span>{numberProduct}</span>)}
                 <div className={CartProductCss.forImg}>
                    <img className={CartProductCss.img} src={product.img} alt="item to buy" />
                 </div>
                <div className={orderPage ? CartProductCss.itemOrder__info :CartProductCss.item__info}>
                    <span className={CartProductCss.item__name}>{product.name}</span>
                    <span className={CartProductCss.item__size}>Size: M</span>
                </div>
            </div>
             <div className={CartProductCss.item__total}>
                <div className={CartProductCss.item__left}> 
                    <div className={CartProductCss.item__price}>{product.price}</div>
                    <div className={CartProductCss.item__quantity}>Price for 1 piece.</div>
                </div>
                    {orderPage && (
                        <div className={CartProductCss.item__price}>
                            <span>Quantity:</span>
                            <span>{quantity}</span>
                        </div>
                    )}
                    {orderPage===false && (<ButtonGray quantity={quantity} onClick1={minus} onClick2={plus}/>)}
                <div className={CartProductCss.item__right}>
                    <div className={CartProductCss.item__price}>
                        <span>Price:</span>
                        <span>{quantity*product.price}</span>
                    </div>
                    <button onClick={removeProductFromCart}
                        className={`${CartProductCss.button} 
                        ${CartProductCss.button_cursor}`}>
                            <img src={Trash} alt="Trash" />
                    </button>
                </div>
            </div>
        </div>
       </>
    )
}

export default CartProduct