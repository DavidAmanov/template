import { useDispatch } from "react-redux";
import { AppDispatch } from "../context/store";
import { useEffect } from "react";
import { logOut } from "../context/userSlice";
import { refreshOrderList } from "../context/orderListSlice";

function useCheckAndLogOut() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const checkAndLogOut = () => {
      const lastLoginTime = localStorage.getItem("loginTime");
      if (lastLoginTime) {
        const now = new Date().getTime();
        const timeDiff = now - parseInt(lastLoginTime, 10);
        if (timeDiff > 24 * 60 * 60 * 1000) {
          dispatch(logOut());
          dispatch(refreshOrderList());
          localStorage.removeItem("loginTime");
        }
      }
    };
    checkAndLogOut();
  }, [dispatch]);
}

export default useCheckAndLogOut;
