import MakeOrder from "../../components/MakeOrder/MakeOrder";
import PromocodeField from "../../components/PromocodField/PromocodeField";
import CartCss from "./Cart.module.css";
import CartProduct from "../CartProduct/CartProduct";
import NavBar from "../NavBar/NavBar";
import EmptyCartOrFavourites from "../EmptyCartOrFavourites/EmptyCartOrFavourites";
import CartImg from "../../img/empty__cart.png";
import { CartProductType } from "../../types/types";

interface CartProp {
  cartProducts?: CartProductType[];
  totalAmount?: number;
}

const Cart: React.FC<CartProp> = ({ cartProducts, totalAmount }) => {
  const linksArray = ["Home", "Catalog"];
  const header = "Cart";
  console.log("big component cart");
  return (
    <>
      {!cartProducts ? (
        <EmptyCartOrFavourites img={CartImg} />
      ) : (
        <section className={CartCss.section}>
          <div className={CartCss.section__wrapper}>
            <NavBar linksArray={linksArray} header={header} />
            {cartProducts.length > 0 && (
              <div className={CartCss.cart}>
                <div className={CartCss.cart__leftBlock}>
                  {cartProducts.map((item, index) => (
                    <CartProduct
                      product={item.product}
                      key={item.id}
                      quantity={item.quantity}
                      orderPage={false}
                      numberProduct={index + 1}
                    />
                  ))}
                  <PromocodeField />
                </div>
                <div>
                  <MakeOrder amount={totalAmount} orderPage={false} />
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
