import React, { useContext } from "react";
import { Context } from "../Context";
function CartPhoto({ item }) {
  const { removePhotoFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        className="ri-delete-bin-line"
        onClick={() => removePhotoFromCart(item)}
      ></i>
      <img src={item.url} alt="your pic" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartPhoto;
