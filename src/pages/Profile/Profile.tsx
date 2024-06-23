import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken, fetchUserData } from '../../context/userSlice';
import { AppDispatch } from '../../context/store';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    const getTokenValue = (name:string) => {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : null;
    };
    
    useEffect(() => {
        const token = getTokenValue('accessToken')
        const refreshToken = getTokenValue('refreshToken')
        console.log(token, "ay")
        if (token) {
            dispatch(setToken({ accessToken: token, refreshToken: refreshToken }));
            dispatch(fetchUserData());
        }
    }, [dispatch]);
    return (
        <>
            <a href="http://localhost:3001/api/user/auth/google">hi bro</a>
            <Link to="/product/8">put here</Link>
        </>
    );
}

export default Profile;
