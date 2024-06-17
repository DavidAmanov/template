import React from 'react'
import FavouritesCss from './Favourites.module.css'
import Divider from '../../img/ico/Divider.png'
import Trash from '../../img/ico/trash.png'
import Product from '../../img/products/8.png'


const Favourites = () => {
    return(
        <>
            <section className={FavouritesCss.section}>
                <div className={FavouritesCss.section__wrapper}>
                    <nav className={FavouritesCss.nav}>
                        <span className={FavouritesCss.first}>Home</span>
                        <img src={Divider} alt='slash' />
                        <span className={FavouritesCss.second}>Favourites</span>
                    </nav>
                    <div className={FavouritesCss.heading}>
                        <h1 className={FavouritesCss.heading__h1}>My favourites</h1>
                        <span>1 item</span>
                    </div>
                    <div className={FavouritesCss.cart__leftBlock}>
                        <div className={FavouritesCss.item}>
                            <div className={FavouritesCss.item__banner}>
                                <div className={FavouritesCss.forImg}>
                                    <img className={FavouritesCss.img} src={Product} alt="item to buy" />
                                </div>
                                <div className={FavouritesCss.item__info}>
                                    <span className={FavouritesCss.item__name}>Black T-shirt</span>
                                    <span className={FavouritesCss.item__size}>Size: M</span>
                                </div>
                            </div>
                            <div className={FavouritesCss.item__total}>
                                <div className={FavouritesCss.item__left}> 
                                    <div className={FavouritesCss.item__price}>Price</div>
                                    <div className={FavouritesCss.item__quantity}>Price for 1 piece.</div>
                                </div>
                                <button className={`${FavouritesCss.button} ${FavouritesCss.button_style} ${FavouritesCss.button_cursor}`}>Add to cart</button>
                                <div className={FavouritesCss.item__right}>
                                    <div className={FavouritesCss.item__price}>Price</div>
                                    <button className={`${FavouritesCss.button} ${FavouritesCss.button_cursor}`}><img src={Trash} alt="Trash" /></button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Favourites