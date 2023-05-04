import { Link } from "react-router-dom";
import style from "./MenuCard.module.css";

const MenuCard = ({ item, onClickBuy = () => {} }) => {
  const ingredients = (
    <div className="text-xs">{item.ingredients.join(", ")}</div>
  );

  return (
    <div
      className={
        "rounded overflow-hidden shadow-lg dark:bg-slate-900 " + style.card
      }
    >
      <img src={item.image} className="w-full" />
      <div className="p-2">
        <Link to={`/catalog/${item.id}`}>
          <div className={"text-2xl font-bold " + style.title}>{item.name}</div>
        </Link>
        <div className="py-2">{ingredients}</div>
        <button
          onClick={() => onClickBuy(item)}
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
