import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserData, logOut } from '../../context/userSlice';
import { AppDispatch } from '../../context/store';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import ProfileCss from './Profile.module.css'
import UserProfile from '../../components/UserProfile/UserProfile';



const Profile = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const dispatch = useDispatch<AppDispatch>();
    const checkAndLogOut = () => {
        const lastLoginTime = localStorage.getItem('loginTime')
        if(lastLoginTime){
            const now = new Date().getTime()
            const timeDiff = now - parseInt(lastLoginTime, 10)
            if(timeDiff > 24 * 60 * 60 * 1000){
                dispatch(logOut())
                localStorage.removeItem('loginTime')
            }
        }
    }

    useEffect(() => {
        checkAndLogOut();
        const urlParams = new URLSearchParams(window.location.search);
        const accessToken = urlParams.get('accessToken');
        const refreshToken = urlParams.get('refreshToken');
        console.log('accessToken:', accessToken);
        console.log('refreshToken:', refreshToken);
        if(accessToken){
            dispatch(setToken({ accessToken: accessToken, refreshToken: refreshToken }));
            dispatch(fetchUserData())
            localStorage.setItem('loginTime', new Date().getTime().toString())
        }
    }, []);
    
    return (
        <>
            <Header />
            <UserProfile />
            <div style={{
                marginLeft: "15vh", 
                marginTop: "3vh", 
                marginBottom: "3vh",
                fontSize: "24px"
                }}>You will like</div>
            <div className={ProfileCss.slider}>
                <Slider  numberOfProduct={width> 1000 ? 4: 1}/>
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
