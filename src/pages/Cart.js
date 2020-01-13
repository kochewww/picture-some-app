import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartPhoto from "../components/CartPhoto";

function Cart() {
  const [buttonText, setButtonText] = useState("Place order");
  const { cartPhotos, emptyCart } = useContext(Context);
  const cartPhotoElements = cartPhotos.map(photo => (
    <CartPhoto key={photo.id} item={photo} />
  ));
  const totalPrice = 5.99 * cartPhotos.length;
  const totalPriceDisplay = totalPrice.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place order");
      emptyCart();
    }, 3000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartPhotoElements}
      <p className="total-cost">Total: {totalPriceDisplay} </p>
      <div className="order-button">
        {cartPhotos.length ? (
          <button onClick={placeOrder}>{buttonText}</button>
        ) : (
          ""
        )}
      </div>
    </main>
  );
}

export default Cart;
