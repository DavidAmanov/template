import { Link } from "react-router-dom";
import EmptyModule from "./EmptyCartOrFavourites.module.css";
import ButtonOval from "../Button/OvalButton/ButtonOval";

interface EmptyProp {
  img: string;
}

const EmptyCartOrFavourites: React.FC<EmptyProp> = ({ img }) => {
  console.log("component empty");
  return (
    <section className={EmptyModule.favourites}>
      <div className={EmptyModule.favourites__wrapper}>
        <h1
          className={`${EmptyModule.favourites__h1} ${EmptyModule.favourites__h1_hidden}`}
        >
          Oh...
          <br /> It seems here is still empty...
        </h1>
        <img className={EmptyModule.img} src={img} alt="logo of page" />
        <div className={EmptyModule.favourites__right}>
          <h1
            className={`${EmptyModule.favourites__h1} ${EmptyModule.favourites__h1_adaptive}`}
          >
            Oh...
            <br /> It seems here is still empty...
          </h1>
          <div className={EmptyModule.favorites__info}>
            <div className={EmptyModule.favourites__text}>
              <h2 className={EmptyModule.favourites__text_h2}>
                There is nothing in favorites
              </h2>
              <span className={EmptyModule.favourites__text_little}>
                We are confident that in our catalog
                <br />
                you will find something you like!
              </span>
            </div>
            <div className={EmptyModule.buttons}>
              <Link to="/catalog">
                <ButtonOval text="Go to catalog" />
              </Link>
              <Link to="/">
                <ButtonOval text="Home page" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EmptyCartOrFavourites;
