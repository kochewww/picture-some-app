import React, { useContext } from "react";
import { Context } from "../Context";
import CartPhoto from "../components/CartPhoto";

function Cart() {
  const { cartPhotos } = useContext(Context);
  const cartPhotoElements = cartPhotos.map(photo => (
    <CartPhoto key={photo.id} item={photo} />
  ));

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartPhotoElements}
      <p className="total-cost">Total: </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
