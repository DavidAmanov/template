import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../context/store";
import { Product } from "../../types/types";
import { fetchCatalog } from "../../context/catalogSlice";
import Card from "../Card/Card";
import SliderCss from "./Slider.module.css"
import {Swiper, SwiperSlide} from "swiper/react"
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const Slider = ({numberOfProduct}: any) =>{
    const sliderFlag = true
    const catalog: Product[] = useSelector((state: RootState)=>state.catalog.items)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(fetchCatalog())
    },[dispatch])
    return(<>
        <section className={SliderCss.slider}>
            <Swiper slidesPerView={numberOfProduct}  pagination={{clickable: true,}} modules={[Pagination]}>
                {catalog.map((product)=>(
                    <SwiperSlide className={SliderCss.card__item} key={product.id}>
                        <Card key={product.id} product={product} sliderFlag={sliderFlag}/>
                    </SwiperSlide>))}
            </Swiper>
        </section>
    </>)
}
export default Slider