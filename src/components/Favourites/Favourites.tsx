import React, { useEffect, useState } from 'react'
import FavouritesCss from './Favourites.module.css'
import Divider from '../../img/ico/Divider.png'
import FavouriteProduct from '../FavouriteProduct/FavouriteProduct'
import { AppDispatch, RootState } from '../../context/store'
import { useSelector } from 'react-redux'
import EmptyFavourites from '../EmptyFavourites/EmptyFavourites'
import { useDispatch } from 'react-redux'
import { fetchFavouriteProducts } from '../../context/favouriteSlice'



const Favourites = () => {
    const favouriteProducts = useSelector((state: RootState)=>(state.favourite.favouriteProduct))
    const [items, setItems] = useState(0)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(fetchFavouriteProducts())
        let count = 0
        if(favouriteProducts.length > 0){
            favouriteProducts.forEach((item)=>{
                count +=1
            })
            setItems(count)
        }
    }, [favouriteProducts])
    return(
        <>
            {favouriteProducts.length === 0 && (<EmptyFavourites />)}
            {favouriteProducts.length > 0 && (
            <section className={FavouritesCss.section}>
                <div className={FavouritesCss.section__wrapper}>
                    <nav className={FavouritesCss.nav}>
                        <span className={FavouritesCss.first}>Home</span>
                        <img src={Divider} alt='slash' />
                        <span className={FavouritesCss.second}>Favourites</span>
                    </nav>
                    <div className={FavouritesCss.heading}>
                        <h1 className={FavouritesCss.heading__h1}>My favourites</h1>
                        <span>{items} item</span>
                    </div>
                    {favouriteProducts.map((item)=>(
                        <FavouriteProduct 
                            product={item.product} 
                            key={item.id}
                        />))}
                </div>
            </section>)}
        </>
    )
}

export default Favourites


