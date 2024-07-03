import { OrderFromServer, UserFromServer } from '../../types/types'
import UserProfileCss from './UserProfileCss.module.css'
import stub from '../../img/image-placeholder.png'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../context/store'
import { useEffect, useState } from 'react'
import { logOut } from '../../context/userSlice'
import ButtonRed from '../Button/ButtonRed'
interface UserProfileProp {
    user?: UserFromServer
    orders?: OrderFromServer[]
}

const UserProfile: React.FC<UserProfileProp> = ({user, orders}) => {
    const [text, setText] = useState('Log in')
    const dispatch = useDispatch<AppDispatch>()
    const handleLogOut = () =>{
        dispatch(logOut())
    }
    const handleLogIn = () => {
        window.location.href = "http://merchserver.org/api/user/auth/google"
    }
    useEffect(()=>{
        if(user?.userId){
            setText('Log out')
        }
    }, [])

    return(
    <div className={UserProfileCss.user}>
        <div className={UserProfileCss.user__data}>
            <span>Your profile</span>
            <img src={user?.photo ? user.photo : stub} alt="userPhoto" />
            <div className={UserProfileCss.user__name}>
                <span>{user?.username  ? user.username :  "Pls authoraize to see your name"}</span>
                <span>{user?.email ? user.email:"Pls authoraize to see your email"}</span>
            </div>
            <ButtonRed text={text} onClick={text === 'Log in' ? handleLogIn : handleLogOut}/>
            {/* <a href="http://merchserver.org/api/user/auth/google">
                <div className={UserProfileCss.google}>
                    <span>{user?.username  ? 'Log out' : 'Log in'}</span>
                </div>
            </a> */}
        </div>
        <div className={UserProfileCss.order}>
            <div className={UserProfileCss.order__title}>Your orders</div>
            {orders && orders.length > 0 ? (orders?.map(order=>(
                <div className={UserProfileCss.order__data}>
                    <span>Order number: {order.id}</span>
                    <span>Order status: {order.status}</span>
                    <span>Order was created: {order.createdAt}</span>
                </div>
                )))
                : <div className={UserProfileCss.order__data}>
                    <span>You don't have any order</span>
                 </div>
                }
        </div>
    </div>
    )
}

export default UserProfile
