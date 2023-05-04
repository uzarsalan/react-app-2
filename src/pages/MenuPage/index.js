import MenuCard from "../../components/MenuCard";
import menu from "../../fakeData/menu";

const Menu = ({ onItemBuy }) => {
  return (
    <div className={"grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}>
      {menu.map((item) => (
        <MenuCard item={item} onClickBuy={onItemBuy} />
      ))}
    </div>
  );
};

export default Menu;
