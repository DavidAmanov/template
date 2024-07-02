import ButtonCss from "./ButtonRed.module.css"

interface ButtonRedProp{
    onClick: ()=>void,
    text: string
}

const ButtonRed:React.FC<ButtonRedProp> = ({onClick, text}) => {
    return(
    <button className={`${ButtonCss.button} ${ButtonCss.button_cart}`} onClick={onClick}>
        {text}
    </button>)
}

export default ButtonRed