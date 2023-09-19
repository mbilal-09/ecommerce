import React, { useState } from "react";
import { Context } from "@/context/context";
import { useContext } from "react";

export default function Cart() {
  const data = useContext(Context);
  const cartItems = data.cart.cartItems;
  const setCartItems = data.cart.setCartItems;
  let total = 0
  cartItems.forEach(element => {
    total += element.price
  });

  function removeItem(e) {
    let i = e.target.value;
    cartItems.splice(i, 1)
    setCartItems([...cartItems])
  }

  return (
    <div className="p-8">
      <div>
        <span className="text-4xl font-semibold">Cart</span>
      </div>
      <div className="grid grid-cols-2 p-2">
        <div className="">
          <span className="text-2xl font-semibold">Product</span>
        </div>
        <div className="">
          <span className="text-2xl font-semibold">Price</span>
        </div>
      </div>
      <hr />
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <div className="grid grid-cols-2 p-2">
              <div className="flex items-center w-3/4">
                <img src={item?.image} width={"50px"} height={"50px"} alt="" />
                <span className="ms-2 text-xl capitalize">{item?.title}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="ms-2 text-xl">{item?.price}</span>
                <button className="ms-2 text-xl me-10 cursor-pointer" value={index} onClick={removeItem}>x</button>
              </div>
            </div>
            <hr />
          </div>
        );
      })}
      <div className="grid grid-cols-2 p-2">
        <div className="">
          <span className="text-2xl font-semibold">Total</span>
        </div>
        <div className="">
          <span className="text-2xl font-medium">{total}</span>
        </div>
      </div>
    </div>
  );
}
