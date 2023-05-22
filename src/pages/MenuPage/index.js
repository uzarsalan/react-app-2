import { useOutletContext } from "react-router-dom";
import MenuCard from "../../components/MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { loadMenu } from "../../store/slices/menuSlice";
import { useEffect, useState } from "react";
import LoadingError from "../../components/LoadingError";

const Menu = () => {
  const menu = useSelector((state) => state.menu);
  // const [category, setCategory] = useState()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMenu());
  }, []);

  return (
    <>
      {menu.loading == "fulfilled" && (
        <div className={"grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4"}>
          {menu.items.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      )}

      {menu.loading == "pending" && (
        <div className="flex justify-center items-center h-[70vh]">
          Загрузка...
        </div>
      )}

      {menu.loading == "rejected" && (
        <LoadingError message="Произошла ошибка при загрузке данных меню" />
      )}
    </>
  );
};

export default Menu;
