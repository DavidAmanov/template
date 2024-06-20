import React from 'react'
import CartProductCss from './CartProduct.module.css'
import Product8 from '../../img/products/8.png'
import Remove from '../../img/ico/Remove Small.png'
import Add from '../../img/ico/Add Small.png'
import Trash from '../../img/ico/trash.png'
import { Product } from '../../context/catalogSlice'

interface ProductProps {
    product: Product;
}


const CartProduct:React.FC<ProductProps> = ({product}) => {

    return(
       <>
            <div className={CartProductCss.item}>
                                <div className={CartProductCss.item__banner}>
                                    <div className={CartProductCss.forImg}>
                                        <img className={CartProductCss.img} src={Product8} alt="item to buy" />
                                    </div>
                                    <div className={CartProductCss.item__info}>
                                        <span className={CartProductCss.item__name}>тфьу</span>
                                        <span className={CartProductCss.item__size}>Size: M</span>
                                    </div>
                                </div>
                                <div className={CartProductCss.item__total}>
                                    <div className={CartProductCss.item__left}> 
                                        <div className={CartProductCss.item__price}>Price</div>
                                        <div className={CartProductCss.item__quantity}>Price for 1 piece.</div>
                                    </div>
                                    <div className={CartProductCss.item__tumbler}>
                                        <button className={`${CartProductCss.button} ${CartProductCss.button_hover} ${CartProductCss.button_cursor}`}><img src={Remove} alt="Remove item" /></button>
                                        <span className={CartProductCss.quantity}>1</span>
                                        <button className={`${CartProductCss.button} ${CartProductCss.button_hover} ${CartProductCss.button_cursor}`}><img src={Add} alt="Add item" /></button>
                                    </div>
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