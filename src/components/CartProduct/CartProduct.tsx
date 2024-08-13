import React, { useEffect } from "react";
import CartProductCss from "./CartProduct.module.css";
import Trash from "../../img/ico/trash.png";
import { Product } from "../../types/types";
import ButtonGray from "../Button/QuantityButton/ButtonQuantity";
import { AppDispatch } from "../../context/store";
import { useDispatch } from "react-redux";
import {
  changeProductQuantity,
  counterAmount,
  removeProduct,
} from "../../context/cartSlice";

interface ProductProps {
  product: Product;
  quantity: number;
  orderPage: boolean;
  numberProduct: number;
}

const CartProduct: React.FC<ProductProps> = ({
  product,
  quantity,
  orderPage,
  numberProduct,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const plus = () => {
    const quantity: number = 1;
    dispatch(
      changeProductQuantity({ quantity: quantity, productId: product.id })
    );
  };

  const minus = () => {
    const quantity: number = -1;
    dispatch(
      changeProductQuantity({ quantity: quantity, productId: product.id })
    );
  };

  const removeProductFromCart = () => {
    dispatch(removeProduct({ quantity: quantity, productId: product.id }));
  };

  useEffect(() => {
    dispatch(counterAmount());
  }, [plus, minus, removeProductFromCart]);
  return (
    <>
      <div className={CartProductCss.item}>
        <div className={CartProductCss.item__banner}>
          {orderPage && <span>{numberProduct}</span>}
          <div className={CartProductCss.forImg}>
            <img
              className={CartProductCss.img}
              src={product.img}
              alt="item to buy"
            />
          </div>
        </div>
        <div className={CartProductCss.item__info}>
          <span className={CartProductCss.item__name}>{product.name}</span>
          <span className={CartProductCss.item__size}>Size: M</span>
          <span className={CartProductCss.item__price}>{product.price}</span>
          <span className={CartProductCss.item__quantity}>
            Price for 1 piece.
          </span>
          {!orderPage && (
            <ButtonGray quantity={quantity} onClick1={minus} onClick2={plus} />
          )}
          <span>Price: {quantity * product.price}</span>
          {orderPage && <span>Quantity: {quantity}</span>}
          <button
            onClick={removeProductFromCart}
            className={`${CartProductCss.button} 
                    ${CartProductCss.button_cursor}`}
          >
            <img src={Trash} alt="Trash" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
