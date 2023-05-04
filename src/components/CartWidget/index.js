import CartIcon from "../svg/CartIcon";

const CartWidget = ({ cart }) => {
  return (
    <div className="mx-auto my-5 container flex flex-row-reverse text-right">
      <div>
        <div className="flex justify-end">
          <CartIcon /> X {cart.length}
        </div>
        <div>
          Сумма: {cart.reduce((sum, item) => (sum += item.price), 0)} руб
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
