import React from 'react'
import style from './card.module.css'
import product from '../../img/products/1.jpg'

const Card = () => {
    return(
        <div className={style.container}>
            <div className={style.status}>New or not</div>
            <div className={style.cover}>
                <img src={product} alt='1'/>
            </div>
            <div className={style.name}>
                <span>Name</span>
                <div className={style.statusCode}>
                    <span>Status</span>
                    <span>Code</span>
                </div>
            </div>
            <div className={style.price}>Price</div>
        </div>
    )
}

export default Card