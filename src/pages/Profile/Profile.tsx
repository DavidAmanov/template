import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserData } from '../../context/userSlice';
import { AppDispatch } from '../../context/store';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Slider from '../../components/Slider/Slider';
import Google from '../../img/ico/google.png'
import ProfileCss from './Profile.module.css'

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const getTokenValue = (name:string) => {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : null;
    };
    
    useEffect(() => {
        const token = getTokenValue('accessToken')
        const refreshToken = getTokenValue('refreshToken')
        if (token) {
            dispatch(setToken({ accessToken: token, refreshToken: refreshToken }));
            dispatch(fetchUserData());
        }
    }, [dispatch]);
    return (
        <>
            <Header />
            <div className={ProfileCss.links__container}>
                <span>The profile page is still working, but you can use your Google account to add items to your <br/>cart
                and favorites, as well as to place trial orders</span>
                <a href="http://31.128.39.49:80/api/user/auth/google" className={ProfileCss.google}>
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
            <Slider />
            <Footer />
        </>
    );
}

export default Profile;
