import React, { useState } from 'react'
import CartProductCss from './CartProduct.module.css'
import Trash from '../../img/ico/trash.png'
import { Product } from '../../context/catalogSlice'
import ButtonGray from '../Button/ButtonGray';
import { RootState } from '../../context/store';
import { useSelector } from 'react-redux';

interface ProductProps {
    product: Product;
    quantity: number;
    updateTotal: () => void;
}


const CartProduct:React.FC<ProductProps> = ({product, quantity, updateTotal}) => {
    const [count, setCount] = useState(quantity)
    const token = useSelector((state: RootState)=>state.user.accessToken)
    const cartId = useSelector((state: RootState)=>state.user.cart_id)

    async function changeProductQuantity(url="", data={}){

        const response = await fetch(url, {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    }

    const plus = () => {
        setCount(count+1)
        changeProductQuantity('http://localhost:3001/api/cartProduct/add', {
            "cart_id": cartId,
            "product_id": product.id,
            "quantity": 1
        }).then(()=>{updateTotal()})
    }

    const minus = () =>{
        setCount(count-1)
        changeProductQuantity('http://localhost:3001/api/cartProduct/add', {
            "cart_id": cartId,
            "product_id": product.id,
            "quantity": -1
        }).then(()=>{updateTotal()})
    }
    return(
       <>
        <div className={CartProductCss.item}>
            <div className={CartProductCss.item__banner}>
                 <div className={CartProductCss.forImg}>
                    <img className={CartProductCss.img} src={product.img} alt="item to buy" />
                 </div>
                <div className={CartProductCss.item__info}>
                    <span className={CartProductCss.item__name}>{product.name}</span>
                    <span className={CartProductCss.item__size}>Size: M</span>
                </div>
            </div>
             <div className={CartProductCss.item__total}>
                <div className={CartProductCss.item__left}> 
                    <div className={CartProductCss.item__price}>{product.price}</div>
                    <div className={CartProductCss.item__quantity}>Price for 1 piece.</div>
                </div>
                    <ButtonGray quantity={count} onClick1={minus} onClick2={plus}/>
                <div className={CartProductCss.item__right}>
                    <div className={CartProductCss.item__price}>
                        <span>Price</span>
                        <span>{count*product.price}</span>
                    </div>
                    <button className={`${CartProductCss.button} ${CartProductCss.button_cursor}`}><img src={Trash} alt="Trash" /></button>
                </div>
            </div>
        </div>
       </>
    )
}

export default CartProduct