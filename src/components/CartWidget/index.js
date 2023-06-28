import { Link } from "react-router-dom";
import CartIcon from "../svg/CartIcon";

const CartWidget = ({ cart, sum }) => {
  return (
    <div className="mx-auto my-5 container flex flex-row-reverse text-right">
      <Link to="/cart">
        <div className="flex justify-end">
          <CartIcon /> X {cart.items.length}
        </div>
        <div>Сумма: {sum} руб</div>
      </Link>
    </div>
  );
};

export default CartWidget;
