import MakeOrderCss from './MakeOrderCss.module.css'
import { RootState } from '../../context/store'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

interface amountProp{
    amount: number
    orderPage: boolean
    onClick?: ()=>void 
}



const MakeOrder: React.FC<amountProp> = ({amount, orderPage, onClick}) => {
    const deliveryMethod = useSelector((state: RootState) => state.order.deliveryMethod ?? 'No delivery method selected');
    const paymentMethod = useSelector((state: RootState) => state.order.paymentData?.method ?? 'No payment method selected');
    console.log(deliveryMethod, paymentMethod);
    console.log(deliveryMethod, paymentMethod)
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/order');
    }


    return(<>
        <div className={MakeOrderCss.form}>
            <div className={MakeOrderCss.form__info}>
                <div className={MakeOrderCss.form__line}>
                    <span className={MakeOrderCss.line}>Items worth:</span>
                    <span className={`${MakeOrderCss.lineRight} ${MakeOrderCss.price_style}`}>{amount}</span>
                </div>
                <div className={MakeOrderCss.form__line}>
                    <span className={MakeOrderCss.line}>Amount with discounts:</span>
                    <span className={`${MakeOrderCss.lineRight} ${MakeOrderCss.price_style}`}>{amount}</span>
                </div>
                {orderPage &&(<><div className={MakeOrderCss.form__line}>
                    <span className={MakeOrderCss.line}>Delivery:</span>
                    <span className={MakeOrderCss.lineRight}>{deliveryMethod}</span>
                </div>
                <div className={MakeOrderCss.form__line}>
                    <span className={MakeOrderCss.line}>Payment method:</span>
                    <span className={MakeOrderCss.lineRight}>{paymentMethod}</span>
                </div></>)}
            </div>
            <div className={MakeOrderCss.form__total}>
                <div className={MakeOrderCss.totalText}>Total:</div>
                <div className={MakeOrderCss.totalPrice}>{amount}</div>
            </div>
            <form action="#" className={MakeOrderCss.form__submit}>
                <button
                    onClick={orderPage ? onClick: handleClick}
                    className={`${MakeOrderCss.button} 
                    ${MakeOrderCss.button_style} 
                    ${MakeOrderCss.button_size}`}>
                        {orderPage ? "Go to Payment" : "Make an order"}
                </button>
                <div className={MakeOrderCss.checkbox}>
                    <input type="checkbox" id="button" required />
                    <label className={MakeOrderCss.labelText} htmlFor="button">By clicking on the 
                        <a className={MakeOrderCss.PlaceOrderLink} href="#">“Place an order”
                            </a> button, you consent to the processing of personal data</label>
                </div>
            </form>
        </div>
    </>)
}

export default MakeOrder