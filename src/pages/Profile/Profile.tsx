import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, fetchUserData } from '../../context/userSlice';
import { RootState, AppDispatch } from '../../context/store';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch<AppDispatch>();
    const token = useSelector((state:RootState) => state.user.token);

    const getCookieValue = (name:string) => {
        const cookie = document.cookie.split('; ').find(row => row.startsWith(`${name}=`));
        return cookie ? cookie.split('=')[1] : null;
    };

    useEffect(() => {
        const token = getCookieValue('token')
        if (token) {
            dispatch(setToken({ token }));
            dispatch(fetchUserData());
        }
    }, [dispatch]);
    console.log(token)
    return (
        <>
            <Link to="http://localhost:3001/api/user/auth/google">hi bro</Link>
            <Link to="/product/8">put here</Link>
        </>
    );
}

export default Profile;
