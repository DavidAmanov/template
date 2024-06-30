import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserData } from '../../context/userSlice';
import { AppDispatch, RootState } from '../../context/store';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Google from '../../img/ico/google.png'
import ProfileCss from './Profile.module.css'
import { useSelector } from 'react-redux';
import stub from '../../img/image-placeholder.png'

interface Order {
    status: string
    id: number
    createdAt: any
    updatedAt: any
    userId: string
}

const Profile = () => {
    const [orders, setOrders] = useState<Order[]>([])
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState)=>(state.user.user))
    const userId = user.userId
    console.log(orders, userId)
    
    const fetchOrders = async () => {
        const response = await fetch(`http://31.128.39.49:80/api/orders/getOrders/${userId}`)
        const data = await response.json()
        setOrders(data)
    }
    
    useEffect(() => {
        fetchOrders()
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('accessToken');
        const refreshToken = urlParams.get('refreshToken');
        console.log('accessToken:', accessToken);
        console.log('refreshToken:', refreshToken);
        if(accessToken){
            dispatch(setToken({ accessToken: accessToken, refreshToken: refreshToken }));
            dispatch(fetchUserData())
        }
    }, []);
    
    return (
        <>
            <Header />
            <div className={ProfileCss.profile__container}>
                <div className={ProfileCss.user}>
                    <img src={user.photo ? user.photo :stub} alt="userPhoto" />
                    <div className={ProfileCss.user__bottom}>
                        <div className={ProfileCss.user__data}>
                            <span>{user.username}</span>
                            <span>{user.email}</span>
                        </div>
                        <div>
                            {orders.map(order=>(
                                <div className={ProfileCss.order__data}>
                                    <span>Order number: {order.id}</span>
                                    <span>Order status: {order.status}</span>
                                    <span>Order was created: {order.createdAt}</span>
                                </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className={ProfileCss.links__container}>
                    <a href="http://merchserver.org/api/user/auth/google" className={ProfileCss.google}>
                        <div>
                            <img src={Google} alt='google icon'/>
                            <span>Google</span>
                        </div>
                    </a>
                    <Link to='/catalog'>
                        <button className={`${ProfileCss.button} 
                            ${ProfileCss.button_style} 
                            ${ProfileCss.button_hover}`}
                            >Go to catalog
                        </button>
                    </Link>
                </div>
            </div>
            <Slider />
            <Footer />
        </>
    );
}

export default Profile;
