import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserData } from '../../context/userSlice';
import { AppDispatch, RootState } from '../../context/store';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import ProfileCss from './Profile.module.css'
import { useSelector } from 'react-redux';
import UserProfile from '../../components/UserProfile/UserProfile';

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
            <UserProfile user={user} orders={orders} />
            <div style={{
                marginLeft: "15vh", 
                marginTop: "3vh", 
                marginBottom: "3vh",
                fontSize: "24px"
                }}>You will like</div>
            <div className={ProfileCss.slider}>
                <Slider  numberOfProduct={4}/>
            </div>
            <Link to='/catalog' className={ProfileCss.to__catalog}>
                <button className={`${ProfileCss.button} 
                    ${ProfileCss.button_style} 
                    ${ProfileCss.button_hover}`}
                    >Go to catalog
                </button>
            </Link>
            <Footer />
        </>
    );
}

export default Profile;
