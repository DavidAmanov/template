import MakeOrderCss from './MakeOrderCss.module.css'

interface amountProp{
    amount: number
}

const MakeOrder: React.FC<amountProp> = ({amount}) => {
    return(<>
        <div className={MakeOrderCss.cart__rightBlock}>
            <div className={MakeOrderCss.cartTop}>
                <div className={MakeOrderCss.cartTop__line}>
                    <span className={MakeOrderCss.item__text}>1 item worth:</span>
                    <span className={`${MakeOrderCss.item__price} ${MakeOrderCss.price_style}`}>Price</span>
                </div>
                <div className={MakeOrderCss.cartTop__line}>
                    <span className={MakeOrderCss.item__text}>Amount with discounts:</span>
                    <span className={`${MakeOrderCss.item__price} ${MakeOrderCss.price_style}`}>Price</span>
                </div>
            </div>
            <div className={MakeOrderCss.cartTotal}>
                <div className={MakeOrderCss.totalText}>Total: {amount}</div>
                <div className={`${MakeOrderCss.item__price} ${MakeOrderCss.price_total}`}>Price</div>
            </div>
            <form action="#" className={MakeOrderCss.cartBottom}>
                <button className={`${MakeOrderCss.button} 
                    ${MakeOrderCss.button_cursor} 
                    ${MakeOrderCss.button_order}`}>
                        Make an order
                </button>
                <div className={MakeOrderCss.checkbox}>
                    <input type="checkbox" id="checkbox" name="agree" required />
                    <span id='checkbox' 
                        className={MakeOrderCss.checkbox__text}>
                            By clicking on the 
                            <a href="#">
                                “Place an order”
                            </a> button, you consent to the processingpersonal data
                    </span>
                </div>
            </form>
        </div>
    </>)
}

export default MakeOrder