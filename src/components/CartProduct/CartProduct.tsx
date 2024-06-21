import React, { useState } from 'react'
import CartProductCss from './CartProduct.module.css'
import Trash from '../../img/ico/trash.png'
import { Product } from '../../context/catalogSlice'
import ButtonGray from '../Button/ButtonGray';

interface ProductProps {
    product: Product;
    quantity: number
}


const CartProduct:React.FC<ProductProps> = ({product, quantity}) => {
    const [count, setCount] = useState(quantity)
    const plus = () => {
        setCount(count+1)
    }

    const minus = () =>{
        setCount(count-1)
    }
    console.log(product)
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
                                        <div className={CartProductCss.item__price}>Price</div>
                                        <button className={`${CartProductCss.button} ${CartProductCss.button_cursor}`}><img src={Trash} alt="Trash" /></button>
                                    </div>
                                </div>
                            </div>
       </>
    )
}

export default CartProduct