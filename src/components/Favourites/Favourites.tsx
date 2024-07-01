import React from 'react'
import FavouritesCss from './Favourites.module.css'
import Divider from '../../img/ico/Divider.png'
import FavouriteProduct from '../FavouriteProduct/FavouriteProduct'
import { RootState } from '../../context/store'
import { useSelector } from 'react-redux'
import EmptyFavourites from '../EmptyFavourites/EmptyFavourites'



const Favourites = () => {
    const favouriteProducts = useSelector((state: RootState)=>(state.favourite.favouriteProduct))
    return(
        <>
            {favouriteProducts.length > 0 ? (
            <section className={FavouritesCss.section}>
                <div className={FavouritesCss.section__wrapper}>
                    <nav className={FavouritesCss.nav}>
                        <span className={FavouritesCss.first}>Home</span>
                        <img src={Divider} alt='slash' />
                        <span className={FavouritesCss.second}>Favourites</span>
                    </nav>
                    <div className={FavouritesCss.heading}>
                        <h1 className={FavouritesCss.heading__h1}>My favourites</h1>
                        <span>{favouriteProducts.length} item</span>
                    </div>
                    {favouriteProducts.map((item)=>(
                        <FavouriteProduct 
                            product={item.product} 
                            key={item.id}
                        />))}
                </div>
            </section>)
            : <EmptyFavourites />}
        </>
    )
}

export default Favourites


