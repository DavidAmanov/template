import Heart from "../../img/Heart.svg";
import ButtonCss from "./ButtonFavouriteCss.module.css";

interface ButtonProp {
  onClick: () => void;
}

const ButtonFavourite: React.FC<ButtonProp> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={ButtonCss.button}>
        <img src={Heart} alt="heartButton" className={ButtonCss.button__img} />
      </button>
    </>
  );
};
export default ButtonFavourite;
