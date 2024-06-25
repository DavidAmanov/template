import React from 'react'
import CardCss from './card.module.css'
import StatisIcon from '../../img/ico/Ellipse_green.png'
import { Product } from '../../context/catalogSlice'
import PlaceholderImage from '../../img/image-placeholder.png'
import { Link } from 'react-router-dom'
import ButtonFavourite from '../Button/ButtonFavourite'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../context/store'
import { addProductToFavourite } from '../../context/favouriteSlice'
import { addProduct } from '../../context/cartSlice'
import ButtonRed from '../Button/ButtonRed'

interface CardProps {
    product: Product;
    sliderFlag: boolean
}

const Card: React.FC<CardProps> = ({product, sliderFlag}) => {
    const dispatch = useDispatch<AppDispatch>()

    const addToFavourite = () => {
        dispatch(addProductToFavourite({productId: product.id}))
    }

    const addToCart = () => {
        dispatch(addProduct({productId: product.id, quantity: 1}))
    }
    const productImage = product.img ? product.img : PlaceholderImage;
    return(
        <article className={CardCss.card}>
            {!sliderFlag && (<div className={CardCss.card__heading}>{product.status}</div>)}
            <div className={CardCss.card__top} style={sliderFlag ? {height: "300px"} : {}}>
                <Link to={`/product/${product.id}`}><img className={CardCss.card__img} src={productImage} alt={product.name} /></Link>
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
                <ButtonRed onClick={addToCart}/>
            </div>)}
        </article>
    )
}

export default Card