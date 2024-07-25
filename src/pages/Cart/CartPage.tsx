import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/store";
import { fetchProductsInCart } from "../../context/cartSlice";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartId = useSelector((state: RootState) => state.user.cart_id);
  useEffect(() => {
    if (cartId) {
      dispatch(fetchProductsInCart());
    }
  }, []);

  return (
    <>
      <Header />
      <Cart />
      <Footer />
    </>
  );
};

export default CartPage;
