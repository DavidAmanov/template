import ButtonCss from "./Button.module.css"


const ButtonRed = ({onClick}: any) => {
    return(
    <button className={`${ButtonCss.button} ${ButtonCss.button_cart}`} onClick={onClick}>
        Add to cart
    </button>)
}

export default ButtonRed