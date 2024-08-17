import React from "react";
import ButtonQuantityModule from "./ButtonQuantity.module.css";
import Remove from "../../../img/ico/Remove Small.png";
import Add from "../../../img/ico/Add Small.png";

interface ButtonProps {
  quantity: number;
  onClick1: () => void;
  onClick2: () => void;
}

const ButtonQuantity: React.FC<ButtonProps> = ({
  quantity,
  onClick1,
  onClick2,
}) => {
  return (
    <div className={ButtonQuantityModule.item__tumbler}>
      <button
        onClick={onClick1}
        disabled={quantity <= 1}
        className={`${ButtonQuantityModule.button} ${ButtonQuantityModule.button_hover} 
            ${ButtonQuantityModule.button_cursor}`}
      >
        <img src={Remove} alt="Remove item" />
      </button>
      <span className={ButtonQuantityModule.quantity}>{quantity}</span>
      <button
        onClick={onClick2}
        className={`${ButtonQuantityModule.button} 
            ${ButtonQuantityModule.button_hover} 
            ${ButtonQuantityModule.button_cursor}`}
      >
        <img src={Add} alt="Add item" />
      </button>
    </div>
  );
};

export default ButtonQuantity;
