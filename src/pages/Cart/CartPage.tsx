import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../context/store";
import { fetchProductsInCart } from "../../context/cartSlice";
import CartPageModule from "./CartPage.module.css";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartId = useSelector((state: RootState) => state.user.cart_id);
  const productsInCart = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

  useEffect(() => {
    if (cartId) {
      dispatch(fetchProductsInCart());
    }
  }, []);

  return (
    <>
      <Header />
      <main className={CartPageModule.main}>
        <Cart
          totalAmount={totalAmount ? totalAmount : undefined}
          cartProducts={productsInCart.length > 0 ? productsInCart : undefined}
        />
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
