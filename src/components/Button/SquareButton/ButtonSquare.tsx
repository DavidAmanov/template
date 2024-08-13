import ButtonSquareModule from "./ButtonRed.module.css";

interface ButtonRedProp {
  onClick: () => void;
  text: string;
}

const ButtonSquare: React.FC<ButtonRedProp> = ({ onClick, text }) => {
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
