import CartIcon from "../svg/CartIcon";

const CartWidget = ({ cart, sum }) => {
  return (
    <div className="mx-auto my-5 container flex flex-row-reverse text-right">
      <div>
        <div className="flex justify-end">
          <CartIcon /> X {cart.length}
        </div>
        <div>Сумма: {sum} руб</div>
      </div>
    </div>
  );
};

export default CartWidget;
