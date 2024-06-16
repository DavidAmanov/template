import React from 'react'
import BannerCss from './Basket.module.css'
import EmptyCart from '../../img/empty__cart.png'

const Basket = () => {
    return(
       <>
            <section className={BannerCss.favourites}>
                <div className={BannerCss.favourites__wrapper}>
                    <h1 className={`${BannerCss.favourites__h1} ${BannerCss.favourites__h1_hidden}`}>Oh...<br /> It seems here is still empty...</h1>
                    <img className={BannerCss.img} src={EmptyCart} alt="favourites logo" />
                    <div className={BannerCss.favourites__right}>
                        <h1 className={`${BannerCss.favourites__h1} ${BannerCss.favourites__h1_adaptive}`}>Oh...<br /> It seems here is still empty...</h1>
                        <div className={BannerCss.favorites__info}>
                            <div className={BannerCss.favourites__text}>
                                <h2 className={BannerCss.favourites__text_h2}>Your basket is empty</h2>
                                <span className={BannerCss.favourites__text_little}>To make a purchase, go to the catalogs <br /> and add the selected items to your cart.</span>
                            </div>
                            <div className={BannerCss.buttons}>
                                <a href="#"><button className={`${BannerCss.button} ${BannerCss.button_style} ${BannerCss.button_hover}`}>Go to catalog</button></a>
                                <a href="#"><button className={`${BannerCss.button} ${BannerCss.button_style} ${BannerCss.button_hover}`}>Home page</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       </>
    )
}

export default Basket