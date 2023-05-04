import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h1>О нашем заведении</h1>
      <p>Самое лучшее кафе в городе!</p>

      <Link to="contacts">
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Контакты
        </button>
      </Link>
    </>
  );
};

export default AboutPage;
