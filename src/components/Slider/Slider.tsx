import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../context/store";
import {Product} from '../../context/catalogSlice'
import { fetchCatalog } from "../../context/catalogSlice";
import Card from "../Card/Card";
import SliderCss from "./Slider.module.css"


const Slider = () =>{
    const [numberOfProduts, setNumberOfProducts] = useState<Product[]>([])
    const sliderFlag = true
    const catalog: Product[] = useSelector((state: RootState)=>state.catalog.items)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(fetchCatalog())
        let products = []
        for(let i = 0; i<3;i++){
            products.push(catalog[i])
        }
        setNumberOfProducts(products)
    },[dispatch])
    return(<>
        <section className={SliderCss.slider}>
            {numberOfProduts.map((product)=>(<Card key={product.id} product={product} sliderFlag={sliderFlag}/>))}
        </section>
    </>)
}
export default Slider