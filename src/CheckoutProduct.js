import React from "react";
import StarIcon from "@material-ui/icons/Star";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon className="product__star" />
              </p>
            ))}
        </div>

        {!hideButton && (
          <button
            className="checkoutProduct__button"
            onClick={removeFromBasket}
          >
            Remove from basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
