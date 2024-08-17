import ButtonOvalModule from "./ButtonOval.module.css";

interface ButtonProp {
  text: string;
  color?: string;
}

const ButtonOval: React.FC<ButtonProp> = ({ text, color }) => {
  return (
    <button
      style={{ color: color ? color : "white" }}
      className={`${ButtonOvalModule.button} 
                        ${ButtonOvalModule.button_style} 
                        ${ButtonOvalModule.button_hover}`}
    >
      {text}
    </button>
  );
};
export default ButtonOval;
