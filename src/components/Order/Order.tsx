import React, { useEffect } from 'react'
import OrderCss from './Order.module.css'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../context/store'
import Delivery from './Delivery/Delivery'
import Payment from './Payment/Payment'
import RecipientDetails from './RecipientDetails/RecipientDetails'
import NavBar from '../NavBar/NavBar'
import OrderProducts from './OrderProducts/OrderProducts'
import MakeOrder from '../MakeOrder/MakeOrder'
import { useDispatch } from 'react-redux'
import { setTotalAmount } from '../../context/orderSice'

const Order = () => {
    const navBarLinks = ['Home' ,'Cart']
    const products = useSelector((state: RootState)=> (state.cart.cartProducts))
    const totalAmount = useSelector((state: RootState)=>(state.cart.totalAmount))

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(setTotalAmount(totalAmount))
    },[])

    return(
        <>
            <section className={OrderCss.section}>
                <div className={OrderCss.section__wrapper}>
                    <NavBar linksArray={navBarLinks} header='Order'/>
                    <section className={OrderCss.order}>
                        <div className={OrderCss.order__left}>
                            <OrderProducts products={products}/>
                            <Delivery />
                            <Payment />
                            <RecipientDetails />
                        </div>
                        <div className={OrderCss.order__right}>
                            <MakeOrder amount={totalAmount} orderPage={true}/>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Order



            