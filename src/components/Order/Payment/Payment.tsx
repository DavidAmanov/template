import PaymentCss from './PaymentCss.module.css'
import Mir from '../../../img/ico/mir.png'
import SPB from '../../../img/ico/spb.png'
import SberPay from '../../../img/ico/sberpay.png'
import Slash from '../../../img/ico/slash__block.png'

const Payment = () => {
    return(<>
        <div className={`${PaymentCss.payment} ${PaymentCss.block}`}>
                                <div className={PaymentCss.name}>
                                    <span>3</span>
                                    <img src={Slash} alt="slash" />
                                    <span>Payment</span>
                                </div>
                                <div className={`${PaymentCss.block__wrapper} ${PaymentCss.block__wrapper_padding} ${PaymentCss.block__wrapper_hidden}`}>
                                    <div className={PaymentCss.payment__method}>
                                        <div className={PaymentCss.method}>
                                            <a href="#online-payment"><span>Online payment</span></a>
                                        </div>
                                        <div className={PaymentCss.method}>
                                            <a href="#Cash"><span>Cash</span></a>
                                        </div>
                                    </div>
                                    <div id="online-payment" className={`${PaymentCss.payment__bottom} ${PaymentCss.payment__bottom_online} ${PaymentCss.payment__bottom_hidden}`}>
                                        <div className={PaymentCss.payment__text}>Select a payment method online or link your card to <a className={PaymentCss.PlaceOrderLink} href="#">personal account</a></div>
                                        <div className={PaymentCss.payment__choose}>
                                            <div className={PaymentCss.payment__variant}>
                                                <input className={PaymentCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={PaymentCss.payment__field}>
                                                    <img className={PaymentCss.payment__ico} src={Mir} alt="mir credit card payment method" />
                                                    <div>Debit Card or Credit Card</div>
                                                </div>
                                            </div>
                                            <div className={PaymentCss.payment__variant}>
                                                <input className={PaymentCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={PaymentCss.payment__field}>
                                                    <img className={PaymentCss.payment__ico} src={SPB} alt="spb qr-code payment method" />
                                                    <div>QR-code</div>
                                                </div>
                                            </div>
                                            <div className={PaymentCss.payment__variant}>
                                                <input className={PaymentCss.payment__raido} type="radio" name="radio-method" required />
                                                <div className={PaymentCss.payment__field}>
                                                    <img className={PaymentCss.payment__ico} src={SberPay} alt="SberPay payment method" />
                                                    <div>Sber Pay</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    </>)
}

export default Payment 