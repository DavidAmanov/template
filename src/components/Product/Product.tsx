//31.128.39.49
import React, { useState } from "react";
import { Product } from "../../types/types";
import ProductCss from "./Product.module.css";
import { AppDispatch, RootState } from "../../context/store";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../context/cartSlice";
import { addProductToFavourite } from "../../context/favouriteSlice";
import ButtonIcon from "../Button/IconButton/ButtonIcon";
import Heart from "../../img/heart_block.png";
import ButtonSquare from "../Button/SquareButton/ButtonSquare";
import ButtonQuantity from "../Button/QuantityButton/ButtonQuantity";

interface ProductProps {
  product: Product;
}

const ProductComp: React.FC<ProductProps> = ({ product }) => {
  const [textToButton, setText] = useState<string>("Add to cart");
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch<AppDispatch>();
  const cartId = useSelector((state: RootState) => state.user.cart_id);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addProductToCart = async () => {
    if (!cartId) {
      alert("You need to log in to add an item to your cart");
    } else {
      dispatch(addProduct({ productId: product.id, quantity: count }));
      setText("Thank you!");
    }
  };

  const addProductToFav = async () => {
    if (!cartId) {
      alert("You need to log in to add an item to your favorites");
    } else {
      dispatch(addProductToFavourite({ productId: product.id }));
    }
  };

  return (
    <div className={ProductCss.container}>
      <section className={ProductCss.picture}>
        <img src={product.img} alt="product img" />
      </section>
      <section className={ProductCss.description__container}>
        <div className={ProductCss.description__head}>
          <div>
            <h2>{product.name}</h2>
            <ButtonIcon onClick={addProductToFav} path={Heart} />
          </div>
          <span>Available</span>
        </div>
        <div className={ProductCss.description__text__block}>
          <span>Collection: </span>
          <span>{product.status}</span>
          <span>Tagline:</span>
          <span>{product.description}</span>
          <span>Price:</span>
          <span>{product.price}</span>
        </div>
        <div className={ProductCss.btn__container}>
          <ButtonSquare onClick={addProductToCart} text={textToButton} />
          <ButtonQuantity quantity={count} onClick1={minus} onClick2={plus} />
        </div>
      </section>
    </div>
  );
};

export default ProductComp;
