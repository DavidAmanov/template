import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { identificate } from '../../context/userSlice';
import { Link } from 'react-router-dom';

const Profile = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const userId = params.get('userId');
        const email = params.get('email');
        const name = params.get('name');
        const photo = params.get('photo');
        const role = params.get('role') === 'ADMIN' ? 'ADMIN' : 'USER';
        const favouriteId = parseInt(params.get('favouriteId') as string, 10);
        const cartId = parseInt(params.get('cartId') as string, 10);

        console.log(token, userId, email, name, photo, role, cartId, favouriteId); 

        dispatch(identificate({ token, userId, email, name, photo, role, cartId, favouriteId }));
    }, [dispatch]);

    return (
        <>
            <Link to="http://localhost:3001/api/user/auth/google">hi bro</Link>
            <Link to="/product/8">put here</Link>
        </>
    );
}

export default Profile;
