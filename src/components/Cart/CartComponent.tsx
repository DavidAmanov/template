import React from 'react'
import CartCss from './Cart.module.css'
import Product8 from '../../img/products/8.png'
import Divider from '../../img/ico/Divider.png'
import Remove from '../../img/ico/Remove Small.png'
import Add from '../../img/ico/Add Small.png'
import Trash from '../../img/ico/trash.png'




const Basket = () => {
    return(
       <>
            <section className={CartCss.section}>
                <div className={CartCss.section__wrapper}>
                    <nav className={CartCss.nav}>
                        <span className={CartCss.first}>Home</span>
                        <img src={Divider} alt="/" />
                        <span className={CartCss.second}>Cart</span>
                    </nav>
                    <div className={CartCss.heading}>
                        <h1 className={CartCss.heading__h1}>Cart</h1>
                        <span>1 item</span>
                    </div>
                    <div className={CartCss.cart}>
                        <div className={CartCss.cart__leftBlock}>
                            <div className={CartCss.item}>
                                <div className={CartCss.item__banner}>
                                    <div className={CartCss.forImg}>
                                        <img className={CartCss.img} src={Product8} alt="item to buy" />
                                    </div>
                                    <div className={CartCss.item__info}>
                                        <span className={CartCss.item__name}>Black T-shirt</span>
                                        <span className={CartCss.item__size}>Size: M</span>
                                    </div>
                                </div>
                                <div className={CartCss.item__total}>
                                    <div className={CartCss.item__left}> 
                                        <div className={CartCss.item__price}>Price</div>
                                        <div className={CartCss.item__quantity}>Price for 1 piece.</div>
                                    </div>
                                    <div className={CartCss.item__tumbler}>
                                        <button className={`${CartCss.button} ${CartCss.button_hover} ${CartCss.button_cursor}`}><img src={Remove} alt="Remove item" /></button>
                                        <span className={CartCss.quantity}>1</span>
                                        <button className={`${CartCss.button} ${CartCss.button_hover} ${CartCss.button_cursor}`}><img src={Add} alt="Add item" /></button>
                                    </div>
                                    <div className={CartCss.item__right}>
                                        <div className={CartCss.item__price}>Price</div>
                                        <button className={`${CartCss.button} ${CartCss.button_cursor}`}><img src={Trash} alt="Trash" /></button>
                                    </div>
                                </div>
                            </div>

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
       </>
    )
}

export default Basket