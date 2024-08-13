import UserProfileCss from "./UserProfileCss.module.css";
import stub from "../../img/image-placeholder.png";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../context/store";
import { useEffect, useState } from "react";
import { logOut } from "../../context/userSlice";
import ButtonRed from "../Button/SquareButton/ButtonSquare";
import { useSelector } from "react-redux";
import { fetchOrderList, refreshOrderList } from "../../context/orderListSlice";
import { refreshCartState } from "../../context/cartSlice";
import { refreshFavouritesState } from "../../context/favouriteSlice";

const UserProfile = () => {
  const [text, setText] = useState("Log in");
  const user = useSelector((state: RootState) => state.user.user);
  const orderList = useSelector((state: RootState) => state.orderList);

  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(refreshOrderList());
    dispatch(refreshCartState());
    dispatch(refreshFavouritesState());
    dispatch(logOut());
  };
  const handleLogIn = () => {
    window.location.href = "http://merchserver.org/api/user/auth/google";
  };
  useEffect(() => {
    if (user.userId) {
      setText("Log out");
      dispatch(fetchOrderList());
    } else {
      setText("Log in");
    }
  }, [user]);

  return (
    <div className={UserProfileCss.user}>
      <div className={UserProfileCss.user__data}>
        <span>Your profile</span>
        <img src={user.photo ? user.photo : stub} alt="userPhoto" />
        <div className={UserProfileCss.user__name}>
          <span>
            {user.username ? user.username : "Pls authoraize to see your name"}
          </span>
          <span>
            {user.email ? user.email : "Pls authoraize to see your email"}
          </span>
        </div>
        <ButtonRed
          text={text}
          onClick={text === "Log in" ? handleLogIn : handleLogOut}
        />
      </div>
      <div className={UserProfileCss.order}>
        <div className={UserProfileCss.order__title}>Your orders</div>
        {orderList && orderList.length > 0 ? (
          orderList?.map((order) => (
            <div className={UserProfileCss.order__data} key={order.id}>
              <span>Order number: {order.id}</span>
              <span>Order status: {order.status}</span>
              <span>Order was created: {order.createdAt}</span>
            </div>
          ))
        ) : (
          <div className={UserProfileCss.order__data}>
            <span>You don't have any order</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
