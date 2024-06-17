import React from 'react'
import OrderCss from './Order.module.css'
import Divider from '../../img/ico/Divider.png'
import Slash from '../../img/ico/slash__block.png'
import Search from '../../img/ico/Search.png'
import Mir from '../../img/ico/mir.png'
import SPB from '../../img/ico/spb.png'
import SberPay from '../../img/ico/sberpay.png'
import Product from '../../img/products/8.png'
import Map from '../../img/map.jpeg'

const Card = () => {
    return(
        <>
            <section className={OrderCss.section}>
                <div className={OrderCss.section__wrapper}>
                    <nav className={OrderCss.nav}>
                        <span className={OrderCss.first}>Home</span>
                        <img src={Divider} alt="/" />
                        <span className={OrderCss.first}>Cart</span>
                        <img src={Divider} alt="/" />
                        <span className={OrderCss.second}>Order</span>
                    </nav>
                    <div className={OrderCss.heading}>
                        <h1 className={OrderCss.heading__h1}>Order</h1>
                    </div>
                    {/* <!-- 1 order html --> */}
                    <form className={OrderCss.order}>
                        <div className={OrderCss.order__left}>
                            <div className={OrderCss.name}>
                                <span>1</span>
                                <img src={Slash} alt="slash" />
                                <span>Order</span>
                            </div>
                            <div className={OrderCss.block}> 
                                <div className={`${OrderCss.block__wrapper} ${OrderCss.block__wrapper_padding}`}>
                                    <div className={OrderCss.columns}>
                                        <div className={OrderCss.left}>
                                            <div className={OrderCss.left__component}>
                                                <span className={`${OrderCss.top} ${OrderCss.top_adaptive}`}>Name</span>
                                                <div className={`${OrderCss.left__bottom} ${OrderCss.bottom}`}>
                                                    <span>1.</span>
                                                    <div className={OrderCss.img}><img className={OrderCss.img__product} src={Product}alt="product" /></div>
                                                    <span className={`${OrderCss.column__product} ${OrderCss.column__product_adaptive}`}>T-shirt</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={OrderCss.right}>
                                            <div className={`${OrderCss.right__column} ${OrderCss.right__column_adaptive}`}>
                                                <span className={OrderCss.top}>T-shirt</span>
                                            </div>
                                            <div className={OrderCss.right__column}>
                                                <span className={OrderCss.top}>Size</span>
                                                <span className={OrderCss.bottom}>M</span>
                                            </div>
                                            <div className={OrderCss.right__column}>
                                                <span className={OrderCss.top}>Color</span>
                                                <span className={OrderCss.bottom}>Black</span>
                                            </div>
                                            <div className={OrderCss.right__column}>
                                                <span className={OrderCss.top}>Quantity</span>
                                                <span className={OrderCss.bottom}>1 piece</span>
                                            </div>
                                            <div className={OrderCss.right__column}>
                                                <span className={OrderCss.top}>Price</span>
                                                <span className={OrderCss.bottom}>Price</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            {/* <!-- delivery html block --> */}
                            <div className={`${OrderCss.delivery} ${OrderCss.block}`}>
                                <div className={OrderCss.name}>
                                    <span>2</span>
                                    <img src={Slash} alt="slash" />
                                    <span>Delivery</span>
                                </div>
                                <div className={`${OrderCss.block__wrapper} ${OrderCss.block__wrapper_padding} ${OrderCss.block__wrapper_hidden}`}>
                                    <div className={OrderCss.delivery__method}>
                                        <div className={OrderCss.method}>
                                            <a href="#pickup"><span>PickUp (FREE)</span></a>
                                        </div>
                                        <div className={OrderCss.method}>
                                            <a href="#courier"><span>Courier</span></a>
                                        </div>
                                    </div>
                                    <div id="pickup" className={`${OrderCss.delivery__bottom} ${OrderCss.delivery__bottom_pickup} ${OrderCss.delivery__bottom_adaptive}`}>
                                        <div className={OrderCss.delivery__left}>
                                            <div className={OrderCss.town}>
                                                <div>Enter your address or select an office on the map:</div>
                                                <div className={OrderCss.town__info}>
                                                    <img className={OrderCss.town__search} src={Search} alt="search icon" />
                                                    <input className={OrderCss.town__input} type="text" required />
                                                </div>
                                            </div>
                                            <div className={OrderCss.delivery__schedule}>
                                                <div className={OrderCss.delivery__address}>
                                                    <span className={OrderCss.delivery__line}>MerchShop</span>
                                                    <span className={OrderCss.delivery__line}>Razyezzhaya st., 22, St. Petersburg</span>
                                                </div>
                                                <div className={OrderCss.delivery__time}>
                                                    <span className={OrderCss.delivery__line}>Phone: 8 (800) 100-08-00</span>
                                                    <span className={OrderCss.delivery__line}>Mon-Fri: 08:00-20:00, Sat-Sun: Closed.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={OrderCss.delivery__right}>
                                            <img className={OrderCss.map} src={Map} alt="map delivery" />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className={`${OrderCss.payment} ${OrderCss.block}`}>
                                <div className={OrderCss.name}>
                                    <span>3</span>
                                    <img src={Slash} alt="slash" />
                                    <span>Payment</span>
                                </div>
                                <div className={`${OrderCss.block__wrapper} ${OrderCss.block__wrapper_padding} ${OrderCss.block__wrapper_hidden}`}>
                                    <div className={OrderCss.payment__method}>
                                        <div className={OrderCss.method}>
                                            <a href="#online-payment"><span>Online payment</span></a>
                                        </div>
                                        <div className={OrderCss.method}>
                                            <a href="#Cash"><span>Cash</span></a>
                                        </div>
                                    </div>
                                    <div id="online-payment" className={`${OrderCss.payment__bottom} ${OrderCss.payment__bottom_online} ${OrderCss.payment__bottom_hidden}`}>
                                        <div className={OrderCss.payment__text}>Select a payment method online or link your card to <a className={OrderCss.PlaceOrderLink} href="#">personal account</a></div>
                                        <div className={OrderCss.payment__choose}>
                                            <div className={OrderCss.payment__variant}>
                                                <input className={OrderCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={OrderCss.payment__field}>
                                                    <img className={OrderCss.payment__ico} src={Mir} alt="mir credit card payment method" />
                                                    <div>Debit Card or Credit Card</div>
                                                </div>
                                            </div>
                                            <div className={OrderCss.payment__variant}>
                                                <input className={OrderCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={OrderCss.payment__field}>
                                                    <img className={OrderCss.payment__ico} src={SPB} alt="spb qr-code payment method" />
                                                    <div>QR-code</div>
                                                </div>
                                            </div>
                                            <div className={OrderCss.payment__variant}>
                                                <input className={OrderCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={OrderCss.payment__field}>
                                                    <img className={OrderCss.payment__ico} src={SberPay} alt="SberPay payment method" />
                                                    <div>Sber Pay</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${OrderCss.block} ${OrderCss.Recipient}`}>
                                <div className={OrderCss.name}>
                                    <span>4</span>
                                    <img src={Slash} alt="slash" />
                                    <span>Recipient details</span>
                                </div>
                                <div className={`${OrderCss.block__wrapper} ${OrderCss.block__wrapper_padding}`}>
                                    <div>Enter the details of the order recipient</div>
                                    <div className={OrderCss.Recipient__details}>
                                        <div className={OrderCss.Recipient__initials}>
                                            <div className={OrderCss.Recipient__field}>
                                                <input className={OrderCss.Recipient__input} name="name" type="text" placeholder="Name" required />
                                            </div>
                                            <div className={OrderCss.Recipient__field}>
                                                <input className={OrderCss.Recipient__input} name="last-name" type="text" placeholder="Last name" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={OrderCss.Recipient__details}>
                                        <div className={OrderCss.Recipient__contacts}>
                                            <div className={OrderCss.Recipient__field}>
                                                <input className={OrderCss.Recipient__input} name="Mobile-Phone" type="text" placeholder="Mobile Phone" required />
                                            </div>
                                            <div className={OrderCss.Recipient__field}>
                                                <input className={OrderCss.Recipient__input} name="E-mail" type="text" placeholder="Email" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={OrderCss.Recipient__details}>
                                        <div className={OrderCss.textarea}>
                                            <textarea className={OrderCss.textarea__comment} name="comment" placeholder="Comment"></textarea>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    

                        {/* <!-- Форма отправки заказа html --> */}
                        <div className={OrderCss.form}>
                            <div className={OrderCss.form__info}>
                                <div className={OrderCss.form__line}>
                                    <span className={OrderCss.line}>1 item worth:</span>
                                    <span className={OrderCss.lineRight}>Price</span>
                                </div>
                                <div className={OrderCss.form__line}>
                                    <span className={OrderCss.line}>Amount with discounts::</span>
                                    <span className={OrderCss.lineRight}>Price</span>
                                </div>
                                <div className={OrderCss.form__line}>
                                    <span className={OrderCss.line}>Total weight:</span>
                                    <span className={OrderCss.lineRight}>450g</span>
                                </div>
                                <div className={OrderCss.form__line}>
                                    <span className={OrderCss.line}>Delivery:</span>
                                    <span className={OrderCss.lineRight}>Free (Pickup)</span>
                                </div>
                                <div className={OrderCss.form__line}>
                                    <span className={OrderCss.line}>Payment method:</span>
                                    <span className={OrderCss.lineRight}>Debit Card</span>
                                </div>
                            </div>
                            <div className={OrderCss.form__total}>
                                <span className={OrderCss.totalText}>Total:</span>
                                <span className={OrderCss.totalPrice}>Price</span>
                            </div>
                            
                            <div className={OrderCss.form__submit}>
                                <button className={`${OrderCss.button} ${OrderCss.button_style} ${OrderCss.button_size}`}type="submit">Order</button>
                                <div className={OrderCss.checkbox}>
                                    <input type="checkbox" id="button" required />
                                    <label className={OrderCss.labelText} htmlFor="button">By clicking on the <a className={OrderCss.PlaceOrderLink} href="#">“Place an order”</a> button, you consent to the processing of personal data</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Card