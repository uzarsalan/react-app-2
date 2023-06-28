import { useState } from "react";
import { useDispatch } from "react-redux";
import { makeOrder } from "../../store/slices/cartSlice";

const CartPage = ({ cart, sum }) => {
  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const onChangeInput = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const sendOrder = () => {
    const data = orderData;
    data.foods = cart.items.map((item) => item.food.id);
    data.items_qty = cart.items.map((item) => item.qty);
    dispatch(makeOrder(data));
  };
  return (
    <>
      {cart.items.loading !== "fulfilled" && (
        <div>
          <ul>
            {cart.items.map((item) => (
              <li>
                {item.food.attributes?.name} - {item.food.attributes?.price}руб
                X {item.qty}шт
              </li>
            ))}
          </ul>
          <strong>Итого: {sum} руб</strong>

          {!!cart.items.length && (
            <>
              <form className="flex flex-col max-w-[300px]">
                <label>Имя</label>
                <input
                  name="name"
                  onChange={onChangeInput}
                  className="border"
                ></input>
                <label>Телефон</label>
                <input
                  name="phone"
                  onChange={onChangeInput}
                  className="border"
                ></input>
              </form>
              <button disabled={cart.loading == "pending"} onClick={sendOrder}>
                Отправить заказ
              </button>
            </>
          )}
        </div>
      )}
      {cart.loading === "fulfilled" && <div>Спасибо за заказ!</div>}
    </>
  );
};

export default CartPage;
