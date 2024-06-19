import React from 'react'
import CardCss from './card.module.css'
import StatisIcon from '../../img/ico/Ellipse_green.png'
import { Product } from '../../context/catalogSlice'
import PlaceholderImage from '../../img/image-placeholder.png'

interface CardProps {
    product: Product;
}

const Card: React.FC<CardProps> = ({product}) => {
    const productImage = product.img ? product.img : PlaceholderImage;
    return(
        <article className={CardCss.card}>
            <div className={CardCss.card__heading}>{product.status}</div>
            <div className={CardCss.card__top}>
                <img className={CardCss.card__img} src={productImage} alt={product.name} />
            </div>
            <div className={CardCss.card__bottom}>
                <div className={CardCss.card__name}>{product.name}</div>
                <div className={CardCss.card__info}>
                    <div className={CardCss.card__status}>
                        <img className={CardCss.status__icon} src={StatisIcon} alt="Icon of the product status" />
                        Available
                    </div>
                    <div className={CardCss.article}>L M S</div>
                </div>
                <div className={CardCss.price}>{product.price}</div>
                <button className={`${CardCss.button} ${CardCss.button_cart}`}>Add to cart</button>
            </div>
        </article>
    )
}

export default Card