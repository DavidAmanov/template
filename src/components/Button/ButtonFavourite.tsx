import Heart from '../../img/Heart.svg'
import ButtonCss from './ButtonFavouriteCss.module.css'

const ButtonFavourite = ({onClick}: any) => {
    return(
        <>
            <button onClick={onClick} className={ButtonCss.button}>
                <img src={Heart} alt="heartButton" />
            </button>
        </>
    )
}
export default ButtonFavourite