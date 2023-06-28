import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/AboutPage";
import Menu from "../pages/MenuPage";
import ContactsPage from "../pages/ContactsPage";
import MenuItemPage from "../pages/MenuItemPage";
import CartProvider from "../components/providers/CartProvider";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Menu /> },
      {
        path: "/catalog/:id",
        element: <MenuItemPage />,
      },
      {
        path: "/cart",
        element: (
          <CartProvider>
            <CartPage />
          </CartProvider>
        ),
      },
      {
        path: "about",
        element: <Outlet />,
        children: [
          {
            path: "",
            element: <AboutPage />,
          },
          {
            path: "contacts",
            element: <ContactsPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
