import ButtonSquareModule from "./ButtonSquare.module.css";

interface ButtonProp {
  onClick: () => void;
  text: string;
}

const ButtonSquare: React.FC<ButtonProp> = ({ onClick, text }) => {
  return (
    <button
      className={`${ButtonSquareModule.button} ${ButtonSquareModule.button_cart}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonSquare;
