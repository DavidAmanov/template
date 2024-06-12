import React from 'react'
import FavouritesCss from './Favourites.module.css'
import Heart from '../../img/heart_block.png'



const Favourites = () => {
    return(
        <>
        <section className={FavouritesCss.favourites}>
            <div className={FavouritesCss.favourites__wrapper}>
                <h1 className={`${FavouritesCss.favourites__h1} ${FavouritesCss.favourites__h1_hidden}`}>Oh...<br /> It seems here is still empty...</h1>
                <img className={FavouritesCss.img} src={Heart} alt="favourites logo" />
                <div className={FavouritesCss.favourites__right}>
                    <h1 className={`${FavouritesCss.favourites__h1} ${FavouritesCss.favourites__h1_adaptive}`}>Oh...<br /> It seems here is still empty...</h1>
                    <div className={FavouritesCss.favorites__info}>
                        <div className={FavouritesCss.favourites__text}>
                            <h2 className={FavouritesCss.favourites__text_h2}>There is nothing in favorites</h2>
                            <span className={FavouritesCss.favourites__text_little}>We are confident that in our catalog<br />you will find something you like!</span>
                        </div>
                        <div className={FavouritesCss.buttons}>
                            <a href="#"><button className={`${FavouritesCss.button} ${FavouritesCss.button_style} ${FavouritesCss.button_hover}`}>Go to catalog</button></a>
                            <a href="#"><button className={`${FavouritesCss.button} ${FavouritesCss.button_style} ${FavouritesCss.button_hover}`}>Home page</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Favourites