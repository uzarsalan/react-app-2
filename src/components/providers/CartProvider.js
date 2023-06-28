import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const CartProvider = ({ children }) => {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log("Cart saved to local storage");
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const sum = cart.items.reduce((sum, item) => {
    sum += item.food.attributes.price * item.qty;
    return sum;
  }, 0);

  return React.cloneElement(children, { cart, sum });
};

export default CartProvider;
