import React from "react";
import EmptyCartCss from "./EmptyCart.module.css";
import Cart from "../../img/empty__cart.png";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <section className={EmptyCartCss.favourites}>
      <div className={EmptyCartCss.favourites__wrapper}>
        <h1
          className={`${EmptyCartCss.favourites__h1} ${EmptyCartCss.favourites__h1_hidden}`}
        >
          Oh...
          <br /> It seems here is still empty...
        </h1>
        <img className={EmptyCartCss.img} src={Cart} alt="favourites logo" />
        <div className={EmptyCartCss.favourites__right}>
          <h1
            className={`${EmptyCartCss.favourites__h1} ${EmptyCartCss.favourites__h1_adaptive}`}
          >
            Oh...
            <br /> It seems here is still empty...
          </h1>
          <div className={EmptyCartCss.favorites__info}>
            <div className={EmptyCartCss.favourites__text}>
              <h2 className={EmptyCartCss.favourites__text_h2}>
                Your basket is empty
              </h2>
              <span className={EmptyCartCss.favourites__text_little}>
                To make a purchase, go to the catalogs <br /> and add the
                selected items to your cart.
              </span>
            </div>
            <div className={EmptyCartCss.buttons}>
              <Link to="/catalog">
                <button
                  className={`${EmptyCartCss.button} 
                                        ${EmptyCartCss.button_style} 
                                        ${EmptyCartCss.button_hover}`}
                >
                  Go to catalog
                </button>
              </Link>
              <Link to="/">
                <button
                  className={`${EmptyCartCss.button} 
                                        ${EmptyCartCss.button_style} 
                                        ${EmptyCartCss.button_hover}`}
                >
                  Home page
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmptyCart;
