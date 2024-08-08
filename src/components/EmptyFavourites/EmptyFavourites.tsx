import React from "react";
import EmptyFavouritesCss from "./EmptyFavourites.module.css";
import Heart from "../../img/heart_block.png";
import { Link } from "react-router-dom";

const EmptyFavourites = () => {
  return (
    <section className={EmptyFavouritesCss.favourites}>
      <div className={EmptyFavouritesCss.favourites__wrapper}>
        <h1
          className={`${EmptyFavouritesCss.favourites__h1} ${EmptyFavouritesCss.favourites__h1_hidden}`}
        >
          Oh...
          <br /> It seems here is still empty...
        </h1>
        <img
          className={EmptyFavouritesCss.img}
          src={Heart}
          alt="favourites logo"
        />
        <div className={EmptyFavouritesCss.favourites__right}>
          <h1
            className={`${EmptyFavouritesCss.favourites__h1} ${EmptyFavouritesCss.favourites__h1_adaptive}`}
          >
            Oh...
            <br /> It seems here is still empty...
          </h1>
          <div className={EmptyFavouritesCss.favorites__info}>
            <div className={EmptyFavouritesCss.favourites__text}>
              <h2 className={EmptyFavouritesCss.favourites__text_h2}>
                There is nothing in favorites
              </h2>
              <span className={EmptyFavouritesCss.favourites__text_little}>
                We are confident that in our catalog
                <br />
                you will find something you like!
              </span>
            </div>
            <div className={EmptyFavouritesCss.buttons}>
              <Link to="/catalog">
                <button
                  className={`${EmptyFavouritesCss.button} 
                                    ${EmptyFavouritesCss.button_style} 
                                    ${EmptyFavouritesCss.button_hover}`}
                >
                  Go to catalog
                </button>
              </Link>
              <Link to="/">
                <button
                  className={`${EmptyFavouritesCss.button} 
                                    ${EmptyFavouritesCss.button_style} 
                                    ${EmptyFavouritesCss.button_hover}`}
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

export default EmptyFavourites;
