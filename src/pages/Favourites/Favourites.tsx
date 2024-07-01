import React, { useEffect, useState } from "react";
import Favourites from '../../components/Favourites/Favourites'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../context/store";
import { CartProductType } from "../../types/types";

const FavouritesPage = () => {
    const [productsInFavourite, setProductsInFavourite] = useState<CartProductType[]>([])
    const token = useSelector((state: RootState)=>state.user.accessToken)
    const favouriteId = useSelector((state: RootState)=>state.user.favourite_id)

    const fetchData = async () => {
        const response = await fetch(`http://31.128.39.49:80/api/favouriteProduct/${favouriteId}`,{
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token}`,
            }
        })
        const data = await response.json()
        setProductsInFavourite(data)
    } 
    useEffect(()=>{
        if(favouriteId){
            fetchData()
        }
    },[])

    return(<>
    <Header />
    <Favourites />
    <Footer />
    </>)
}
export default FavouritesPage