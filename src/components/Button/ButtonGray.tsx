import React from 'react';
import ButtonGrayCss from './ButtonGray.module.css'
import Remove from '../../img/ico/Remove Small.png'
import Add from '../../img/ico/Add Small.png'

interface ButtonProps{
    quantity: number
    onClick1: ()=>void
    onClick2: ()=>void
}

const ButtonGray:React.FC<ButtonProps> = ({quantity, onClick1, onClick2}) => {
    return(
    <div className={ButtonGrayCss.item__tumbler}>
        <button 
            onClick={onClick1} disabled={quantity <= 1}
            className={`${ButtonGrayCss.button} ${ButtonGrayCss.button_hover} 
            ${ButtonGrayCss.button_cursor}`}>
                <img src={Remove} alt="Remove item" />
        </button>
            <span className={ButtonGrayCss.quantity}>{quantity}</span>
        <button
            onClick={onClick2} 
            className={`${ButtonGrayCss.button} 
            ${ButtonGrayCss.button_hover} 
            ${ButtonGrayCss.button_cursor}`}>
                <img src={Add} alt="Add item" />
            </button>
    </div>
    )
}

export default ButtonGray