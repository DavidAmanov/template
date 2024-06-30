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

    useEffect(() => {
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
            <div className={ProfileCss.links__container}>
                <span>The profile page is still working, but you can use your Google account to add items to your <br/>cart
                and favorites, as well as to place trial orders</span>
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
            <Slider />
            <Footer />
        </>
    );
}

export default Profile;
