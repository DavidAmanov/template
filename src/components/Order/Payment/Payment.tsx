import PaymentCss from './PaymentCss.module.css';
import Slash from '../../../img/ico/slash__block.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../context/store';
import { resetPaymentMethod, setPaymentMethod } from '../../../context/orderSice';
import { Payments } from '../../../types/types';
import { fetchPaymentMethods } from '../../../context/paymentSlice';
import { Link } from 'react-router-dom';

const Payment = () => {
    const [paymentMethods, setPaymentMethods] = useState<Payments[]>([]);
    const [selectedMethod, setSelectedMethod] = useState<string>('');
    const payments = useSelector((state: RootState) => state.payment);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(resetPaymentMethod());
        dispatch(fetchPaymentMethods());
    }, [dispatch]);

    useEffect(() => {
        setPaymentMethods(payments);
    }, [payments]);

    const changeMethod = (name: string) => {
        setSelectedMethod(name);
        dispatch(setPaymentMethod(name));
    };

    return (
        <div className={`${PaymentCss.payment} ${PaymentCss.block}`}>
            <div className={PaymentCss.name}>
                <span>3</span>
                <img src={Slash} alt="slash" />
                <span>Payment</span>
            </div>
            <div className={`${PaymentCss.block__wrapper} ${PaymentCss.block__wrapper_padding} ${PaymentCss.block__wrapper_hidden}`}>
                <div id="online-payment" className={`${PaymentCss.payment__bottom} ${PaymentCss.payment__bottom_online} ${PaymentCss.payment__bottom_hidden}`}>
                    <div className={PaymentCss.payment__text}>
                        Select a payment method online or link your card to <Link to='/profile' className={PaymentCss.PlaceOrderLink}>personal account</Link>
                    </div>
                    <div className={PaymentCss.payment__choose}>
                        {paymentMethods.map((payment, index) => (
                            <div key={index} className={PaymentCss.payment__variant}>
                                <div className={PaymentCss.payment__field} onClick={() => changeMethod(payment.name)}>
                                    <input 
                                        className={PaymentCss.payment__radio} 
                                        type="radio" 
                                        name="radio-method" 
                                        required 
                                        checked={selectedMethod === payment.name}
                                        onChange={() => changeMethod(payment.name)} 
                                    />
                                    <div>{payment.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
