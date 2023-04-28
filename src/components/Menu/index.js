import MenuCard from "./MenuCard";

const Menu = ({ onItemBuy }) => {
  let menu = [
    {
      name: "Куриная",
      price: 500,
      ingredients: ["Грибы", "Курица", "Сыр", "Томатный соус"],
      image: "/assets/pizza.jpeg",
    },
    {
      name: "Колбасная",
      price: 500,
      ingredients: ["Грибы", "Колбаса", "Сыр", "Томатный соус"],
      image: "/assets/pizza.jpeg",
    },
    {
      name: "Ананасная",
      price: 500,
      ingredients: ["Грибы", "Ананас", "Сыр", "Томатный соус"],
      image: "/assets/pizza.jpeg",
    },
    {
      name: "Охотничья",
      price: 500,
      ingredients: ["Грибы", "Колбаски", "Сыр", "Томатный соус"],
      image: "/assets/pizza.jpeg",
    },
    {
      name: "Детская",
      price: 500,
      ingredients: ["Грибы", "Картофель фри", "Сыр", "Томатный соус"],
      image: "/assets/pizza.jpeg",
    },
  ];
  return (
    <div
      className={
        "mx-auto grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 container"
      }
    >
      {menu.map((item) => (
        <MenuCard item={item} onClickBuy={onItemBuy} />
      ))}
    </div>
  );
};

export default Menu;
