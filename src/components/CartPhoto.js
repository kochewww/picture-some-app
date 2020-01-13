import React, { useContext, useState } from "react";
import { Context } from "../Context";
function CartPhoto({ item }) {
  const [hovered, setHovered] = useState(false);
  const { removePhotoFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => removePhotoFromCart(item)}
      ></i>
      <img src={item.url} alt="your pic" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartPhoto;
