import React from 'react'
import BannerCss from './Basket.module.css'
import Product8 from '../../src/img/products/8.png'
import Divider from '../../src/img/ico/Divider.png'
import Remove from '../../src/img/ico/Add Small.png'
import Add from '../../src/img/ico/Add Small.png'
import Trash from '../../src/img/ico/trash.png'




const Basket = () => {
    return(
       <>
        <div className={BannerCss.section}>
            <div className={BannerCss.section__wrapper}>
                <nav className={BannerCss.nav}>
                    <span className={BannerCss.first}>Home</span>
                    <img src={Divider} alt="/" />
                    <span className={BannerCss.second}>Cart</span>
                </nav>
                <div className={BannerCss.heading}>
                    <h1 className={BannerCss.heading__h1}>Cart</h1>
                    <span>1 item</span>
                </div>
                <div className={BannerCss.cart}>
                    <div className={BannerCss.cart__leftBlock}>
                        <div className={BannerCss.item}>
                            <div className={BannerCss.item__banner}>
                                <div className={BannerCss.forImg}>
                                    <img className={BannerCss.img} src={Product8} alt="item to buy" />
                                </div>
                                <div className={BannerCss.item__info}>
                                    <span className={BannerCss.item__name}>Black T-shirt</span>
                                    <span className={BannerCss.item__size}>Size: M</span>
                                </div>
                            </div>
                            <div className={BannerCss.item__total}>
                                <div className={BannerCss.item__left}> 
                                    <div className={BannerCss.item__price}>Price</div>
                                    <div className={BannerCss.item__quantity}>Price for 1 piece.</div>
                                </div>
                                <div className={BannerCss.item__tumbler}>
                                    <button className={`${BannerCss.button} ${BannerCss.button_hover} ${BannerCss.button_cursor}`}><img src={Remove} alt="Remove item" /></button>
                                    <span className={BannerCss.quantity}>1</span>
                                    <button className="button button_hover button_cursor"><img src={Add} alt="Add item" /></button>
                                </div>
                                <div className={BannerCss.item__right}>
                                    <div className={BannerCss.item__price}>Price</div>
                                    <button className={`${BannerCss.button} ${BannerCss.button_cursor}`}><img src={Trash} alt="Trash" /></button>
                                </div>
                            </div>
                        </div>

                        <div className={BannerCss.promocode}>
                            <div className={BannerCss.promocode__field}>
                                <input type="text" className={BannerCss.promocode__input} placeholder="Promocode" />
                            </div>
                            <div className={BannerCss.promocode__text}>
                                To take advantage of the discount, enter the promotional code
                            </div>
                        </div>
                    </div>
                    <div className={BannerCss.cart__rightBlock}>
                        <div className={BannerCss.cartTop}>
                            <div className={BannerCss.cartTop__line}>
                                <span className={BannerCss.item__text}>1 item worth:</span>
                                <span className={`${BannerCss.item__price} ${BannerCss.price_style}`}>Price</span>
                            </div>
                            <div className={BannerCss.cartTop__line}>
                                <span className={BannerCss.item__text}>Amount with discounts:</span>
                                <span className={`${BannerCss.item__price} ${BannerCss.price_style}`}>Price</span>
                            </div>
                        </div>
                        <div className={BannerCss.cartTotal}>
                            <div className={BannerCss.totalText}>Total:</div>
                            <div className={`${BannerCss.item__price} ${BannerCss.price_total}`}>Price</div>
                        </div>
                        <form action="#" className={BannerCss.cartBottom}>
                            <button className={`${BannerCss.button} ${BannerCss.button_cursor} ${BannerCss.button_order}`}>Make an order</button>
                            <div className={BannerCss.checkbox}>
                                <input type="checkbox" id="checkbox" name="agree" required />
                                <span id='checkbox' className={BannerCss.checkbox__text}>By clicking on the <a href="#">“Place an order”</a> button, you consent to the processing of personal data</span>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
       </>
    )
}

export default Basket