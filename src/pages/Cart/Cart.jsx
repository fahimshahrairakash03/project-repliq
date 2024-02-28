import React from "react";
import Header from "../../components/Header/Header";
import CartProducts from "../CartProducts/CartProducts";
import CartBill from "../CartBill/CartBill";

const Cart = ({ cartItems, handleDeleteItem }) => {
  return (
    <div>
      <Header></Header>
      <div className="px-1 py-5">
        <h2 className="text-center my-3 font-bold">
          Total Items in Cart: {cartItems.length}
        </h2>
        {cartItems.map((cartItem) => (
          <CartProducts
            key={cartItem.id}
            cartItem={cartItem}
            handleDeleteItem={handleDeleteItem}
          ></CartProducts>
        ))}
      </div>
      <div>
        <CartBill cartItems={cartItems}></CartBill>
      </div>
    </div>
  );
};

export default Cart;
