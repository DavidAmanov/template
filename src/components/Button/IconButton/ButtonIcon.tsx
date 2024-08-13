import ButtonIconModule from "./ButtonIcon.module.css";

interface ButtonProp {
  onClick: () => void;
  path: string;
}

const ButtonIcon: React.FC<ButtonProp> = ({ onClick, path }) => {
  return (
    <>
      <button onClick={onClick} className={ButtonIconModule.button}>
        <img
          src={path}
          alt="heartButton"
          className={ButtonIconModule.button__img}
        />
      </button>
    </>
  );
};
export default ButtonIcon;
