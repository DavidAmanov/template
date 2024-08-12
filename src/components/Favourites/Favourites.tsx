import React from "react";
import FavouritesCss from "./Favourites.module.css";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";
import NavBar from "../NavBar/NavBar";
import { CartProductType } from "../../types/types";
import EmptyCartOrFavourites from "../EmptyCartOrFavourites/EmptyCartOrFavourites";
import Heart from "../../img/heart_block.png";

interface FavProp {
  favouriteProducts?: CartProductType[];
}

const Favourites: React.FC<FavProp> = ({ favouriteProducts }) => {
  const linksArray = ["Home", "Favourites"];
  const header = "Favourites";
  console.log("big component favourites");
  return (
    <>
      {!favouriteProducts ? (
        <EmptyCartOrFavourites img={Heart} />
      ) : (
        <section className={FavouritesCss.section}>
          <div className={FavouritesCss.section__wrapper}>
            <NavBar linksArray={linksArray} header={header} />
            <div className={FavouritesCss.section__wrapper__div}>
              {favouriteProducts.map((item) => (
                <FavouriteProduct product={item.product} key={item.id} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Favourites;
