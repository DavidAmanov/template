import React, { useState } from 'react'
import CardCss from './card.module.css'
import StatisIcon from '../../img/ico/Ellipse_green.png'
import { Product } from '../../types/types'
import PlaceholderImage from '../../img/image-placeholder.png'
import { Link } from 'react-router-dom'
import ButtonFavourite from '../Button/ButtonFavourite'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../context/store'
import { addProductToFavourite } from '../../context/favouriteSlice'
import { addProduct } from '../../context/cartSlice'
import ButtonRed from '../Button/ButtonRed'
import { useSelector } from 'react-redux'

interface CardProps {
    product: Product;
    sliderFlag: boolean
}

const Card: React.FC<CardProps> = ({product, sliderFlag}) => {
    const [textToButton, setText] = useState<string>('Add to cart')
    const dispatch = useDispatch<AppDispatch>()
    const cartId = useSelector((state: RootState)=>(state.user.cart_id))

    const addToFavourite = () => {
        if(!cartId){
            alert('You need to log in to add an item to your favorites')
        } else {
            dispatch(addProductToFavourite({productId: product.id}))
        }
    }

    const addToCart = () => {
        if(!cartId){
            alert('You need to log in to add an item to your cart')
        } else {
            dispatch(addProduct({productId: product.id, quantity: 1}))
            setText('Thank you!')
        }
    }
    const productImage = product.img ? product.img : PlaceholderImage;
    return(
        <article className={CardCss.card}>
            {!sliderFlag && (<div className={CardCss.card__heading}>{product.status}</div>)}
            <div className={CardCss.card__top} style={sliderFlag ? {height: "300px"} : {}}>
                <Link to={`/product/${product.id}`}>
                    <img className={CardCss.card__img} src={productImage} alt={product.name} />
                </Link>
            </div>
            {sliderFlag && (<div className={CardCss.card__heading}>{product.name}</div>)}
            {!sliderFlag &&(<div className={CardCss.card__bottom}>
                <div className={CardCss.card__name}>{product.name} 
                    <ButtonFavourite onClick={addToFavourite}/>
                </div>
                <div className={CardCss.card__info}>
                    <div className={CardCss.card__status}>
                        <img className={CardCss.status__icon} src={StatisIcon} alt="Icon of the product status" />
                        Available
                    </div>
                    <div className={CardCss.article}>L M S</div>
                </div>
                <div className={CardCss.price}>{product.price}</div>
                <ButtonRed onClick={addToCart} text={textToButton}/>
            </div>)}
        </article>
    )
}

export default Card