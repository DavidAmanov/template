import React, { useEffect, useMemo } from "react";
import Favourites from '../../components/Favourites/Favourites'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/store";
import { useDispatch } from "react-redux";
import { fetchFavouriteProducts } from "../../context/favouriteSlice";

const FavouritesPage = () => {
    const dispatch = useDispatch<AppDispatch>()
    const favouriteId = useSelector((state: RootState)=>state.user.favourite_id)
    const favouriteProducts = useSelector((state: RootState)=>(state.favourite.favouriteProduct))
    const isEmpty = useMemo(() => favouriteProducts.length === 0, [favouriteProducts.length]);

    useEffect(()=>{
        if(favouriteId){
            dispatch(fetchFavouriteProducts())
        }
    },[])

    return(<>
    <Header />
    <Favourites isEmpty={isEmpty} favouriteProducts={favouriteProducts}/>
    <Footer />
    </>)
}
export default FavouritesPage