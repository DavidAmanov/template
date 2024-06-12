import React from 'react'
import CardCss from './card.module.css'
import ProductImg from '../../img/products/8.png'
import StatisIcon from '../../img/ico/Ellipse_green.png'

const Card = () => {
    return(
        <article className={CardCss.card}>
            <div className={CardCss.card__heading}>New or not</div>
            <div className={CardCss.card__top}>
                <img className={CardCss.card__img} src={ProductImg} alt="T-shirt black" />
            </div>
            <div className={CardCss.card__bottom}>
                <div className={CardCss.card__name}>Name of the product</div>
                <div className={CardCss.card__info}>
                    <div className={CardCss.card__status}>
                        <img className={CardCss.status__icon} src={StatisIcon} alt="Icon of the product status" />
                        Status
                    </div>
                    <div className={CardCss.article}>Article</div>
                </div>
                <div className={CardCss.price}>Price</div>
                <button className={`${CardCss.button} ${CardCss.button_cart}`}>Add to cart</button>
            </div>
        </article>
    )
}

export default Card