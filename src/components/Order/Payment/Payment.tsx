import PaymentCss from './PaymentCss.module.css'
import Slash from '../../../img/ico/slash__block.png'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../context/store'
import { resetPaymentMethod, setPaymentMethod } from '../../../context/orderSice'
import { Payments } from '../../../types/types'

const Payment = () => {
    const [paymentMethod, setPaymentMet] = useState<Payments[]>([])
    const fetchPayment = async () =>{
        const response = await fetch('http://31.128.39.49:80/api/paymentMethod/getAll')
        const data = await response.json()
        setPaymentMet(data)
    }
    useEffect(()=> {
        dispatch(resetPaymentMethod())
        fetchPayment()
    }, [])

    const dispatch = useDispatch<AppDispatch>()

    const changeMethod = (name: string) => {
        dispatch(setPaymentMethod(name))
    }

    return(<>
        <div className={`${PaymentCss.payment} ${PaymentCss.block}`}>
            <div className={PaymentCss.name}>
                <span>3</span>
                <img src={Slash} alt="slash" />
                <span>Payment</span>
            </div>
            <div className={`${PaymentCss.block__wrapper} ${PaymentCss.block__wrapper_padding} ${PaymentCss.block__wrapper_hidden}`}>
                <div id="online-payment" className={`${PaymentCss.payment__bottom} ${PaymentCss.payment__bottom_online} ${PaymentCss.payment__bottom_hidden}`}>
                    <div className={PaymentCss.payment__text}>Select a payment method online or link your card to <a className={PaymentCss.PlaceOrderLink} href="#">personal account</a></div>
                    <div className={PaymentCss.payment__choose}>
                        {paymentMethod.map((payment, index)=>(
                            <div key={index} className={PaymentCss.payment__variant}>
                                <input className={PaymentCss.payment__raido} type="radio" name="radio-method" required onClick={()=>changeMethod(payment.name)}/>
                                <div className={PaymentCss.payment__field}>
                                    {/* <img className={PaymentCss.payment__ico} src={Mir} alt="mir credit card payment method" /> */}
                                    <div>{payment.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Payment 