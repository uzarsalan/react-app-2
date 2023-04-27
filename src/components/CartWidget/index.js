const CartWidget = ({ cart }) => {
  return (
    <div className="mx-auto my-5 container flex flex-row-reverse text-right">
      <div>
        <div className="text-xl">Корзина</div>
        <div>Количество товаров: {cart.length}</div>
        <div>
          Сумма: {cart.reduce((sum, item) => (sum += item.price), 0)} руб
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
