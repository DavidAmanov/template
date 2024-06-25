import { Link } from 'react-router-dom'
import MakeOrderCss from './MakeOrderCss.module.css'

interface amountProp{
    amount: number
    orderPage: boolean
}

const MakeOrder: React.FC<amountProp> = ({amount, orderPage}) => {
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
                    <span className={MakeOrderCss.lineRight}>Free (Pickup)</span>
                </div>
                <div className={MakeOrderCss.form__line}>
                    <span className={MakeOrderCss.line}>Payment method:</span>
                    <span className={MakeOrderCss.lineRight}>Debit Card</span>
                </div></>)}
            </div>
            <div className={MakeOrderCss.form__total}>
                <div className={MakeOrderCss.totalText}>Total:</div>
                <div className={MakeOrderCss.totalPrice}>{amount}</div>
            </div>
            <form action="#" className={MakeOrderCss.form__submit}>
                <Link to='/order'>
                    <button className={`${MakeOrderCss.button} 
                        ${MakeOrderCss.button_style} 
                        ${MakeOrderCss.button_size}`}>
                            Make an order
                    </button>
                </Link>
                <div className={MakeOrderCss.checkbox}>
                    <input type="checkbox" id="button" required />
                    <label className={MakeOrderCss.labelText} htmlFor="button">By clicking on the <a className={MakeOrderCss.PlaceOrderLink} href="#">“Place an order”</a> button, you consent to the processing of personal data</label>
                </div>
            </form>
        </div>
    </>)
}

export default MakeOrder