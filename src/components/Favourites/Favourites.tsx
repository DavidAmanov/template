import React from 'react'
import FavouritesCss from './Favourites.module.css'
import FavouriteProduct from '../FavouriteProduct/FavouriteProduct'
import EmptyFavourites from '../EmptyFavourites/EmptyFavourites'
import NavBar from '../NavBar/NavBar'
import { CartProductType } from '../../types/types'

interface FavProp{
    isEmpty: boolean
    favouriteProducts: CartProductType[]
}

const Favourites: React.FC<FavProp> = ({isEmpty, favouriteProducts}) => {
    const linksArray = ['Home', 'Favourites']
    const header = 'Favourites'
    return(
        <>
            {isEmpty ? <EmptyFavourites /> 
            :(<section className={FavouritesCss.section}>
                <div className={FavouritesCss.section__wrapper}>
                    <NavBar linksArray={linksArray} header={header}/>
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


