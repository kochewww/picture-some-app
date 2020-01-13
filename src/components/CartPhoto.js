import React, { useContext, useState } from "react";
import { Context } from "../Context";
import useHover from "../hooks/useHover";
function CartPhoto({ item }) {
  const [hovered, ref] = useHover();
  const { removePhotoFromCart } = useContext(Context);
  return (
    <div className="cart-item">
      <i
        className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"}
        ref={ref}
        onClick={() => removePhotoFromCart(item)}
      ></i>
      <img src={item.url} alt="your pic" width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartPhoto;
