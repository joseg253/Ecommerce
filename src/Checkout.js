import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/home/THILGMA/FallEvent2020/XCM_Manual_ORIGIN_1264037_1346839_US_us_fall_event_stripes_1_us_en_3339519_1500x90_en_US.jpg"
          alt="asdas"
        ></img>
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>You have no items in your basket.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">
              Your Shopping Basket
              {basket?.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                ></CheckoutProduct>
              ))}
            </h2>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
