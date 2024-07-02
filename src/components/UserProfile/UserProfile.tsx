import { OrderFromServer, UserFromServer } from '../../types/types'
import UserProfileCss from './UserProfileCss.module.css'
import stub from '../../img/image-placeholder.png'
interface UserProfileProp {
    user?: UserFromServer
    orders?: OrderFromServer[]
}

const UserProfile: React.FC<UserProfileProp> = ({user, orders}) => {
    return(
    <div className={UserProfileCss.user}>
        <div className={UserProfileCss.user__data}>
            <span>Your profile</span>
            <img src={user?.photo ? user.photo : stub} alt="userPhoto" />
            <div className={UserProfileCss.user__name}>
                <span>{user?.username  ? user.username :  "Pls authoraize to see your name"}</span>
                <span>{user?.email ? user.email:"Pls authoraize to see your email"}</span>
            </div>
            <a href="http://merchserver.org/api/user/auth/google">
                <div className={UserProfileCss.google}>
                    <span>{user?.username  ? 'Log out' : 'Log in'}</span>
                </div>
            </a>
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