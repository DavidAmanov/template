import FavouriteProductCss from "./FavouriteProductCss.module.css";
import Trash from "../../img/ico/trash.png";
import { Product } from "../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../context/store";
import { removeProductFromFavourite } from "../../context/favouriteSlice";
import ButtonRed from "../Button/ButtonRed";
import { addProduct } from "../../context/cartSlice";
import { useState } from "react";

interface FavouriteProductProp {
  product: Product;
}

const FavouriteProduct: React.FC<FavouriteProductProp> = ({ product }) => {
  const [textToButton, setText] = useState<string>("Add to cart");
  const dispatch = useDispatch<AppDispatch>();

  const handleRemove = () => {
    dispatch(removeProductFromFavourite({ productId: product.id }));
  };

  const addToCart = () => {
    dispatch(addProduct({ productId: product.id, quantity: 1 }));
    setText("Thank you!");
  };
  return (
    <div className={FavouriteProductCss.item}>
      <div className={FavouriteProductCss.item__banner}>
        <div className={FavouriteProductCss.forImg}>
          <img
            className={FavouriteProductCss.img}
            src={product.img}
            alt="item to buy"
          />
        </div>
      </div>
      <div className={FavouriteProductCss.item__info}>
        <span className={FavouriteProductCss.item__name}>{product.name}</span>
        <span className={FavouriteProductCss.item__size}>
          {product.description}
        </span>
        <div className={FavouriteProductCss.item__info__div}>
          <span className={FavouriteProductCss.item__price}>
            Price {product.price}
          </span>
          <span className={FavouriteProductCss.item__quantity}>
            Price for 1 piece.
          </span>
        </div>
        <div className={FavouriteProductCss.button__div}>
          <ButtonRed onClick={addToCart} text={textToButton} />
          <button onClick={handleRemove} className={FavouriteProductCss.button}>
            <img src={Trash} alt="Trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavouriteProduct;
