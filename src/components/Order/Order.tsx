import React, { useEffect, useState } from 'react'
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
import { postOrder, setOrderData, setTotalAmount, setUserId } from '../../context/orderSice'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navBarLinks = ['Home' ,'Cart']
    const products = useSelector((state: RootState)=> (state.cart.cartProducts))
    const totalAmount = useSelector((state: RootState)=>(state.cart.totalAmount))
    const userId = useSelector((state: RootState)=> (state.user.user.userId))
    const order = useSelector((state: RootState)=>(state.order))
    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>()

    useEffect(()=>{
        dispatch(setTotalAmount(totalAmount))
    },[])

    const fetchOrder = () => {
        dispatch(setUserId(userId))
        dispatch(setOrderData("accepted"))
        if(
            order.recipientData.name === "" ||
            order.recipientData.lastName === "" ||
            order.recipientData.mobilePhone === "" ||
            order.recipientData.email === ""
        ) {
            alert("Your recipient data is empty")
        }
        else if (
            order.deliveryMethod === 'Courier' && (
            order.addressData.city === 'Tokyo' ||
            order.addressData.zipCode === '285000' ||
            order.addressData.country === 'Japan')
        ) {
            alert("Your address data is empty")
        }
        else if(order.paymentData.method === ""){
            alert("You need to choose payment method")
        }
        else{
            console.log(order, "pre")
            dispatch(postOrder())
            navigate('/thanksPage')
        }
    }

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
                            <MakeOrder 
                                amount={totalAmount} 
                                orderPage={true} 
                                onClick={fetchOrder} 
                            />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Order



            