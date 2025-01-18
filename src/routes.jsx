import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./pages/menu";
import CoffeeMenu from "./menu-pages/coffee-menu";
import BreakfastMenu from "./menu-pages/breakfast-menu";
import BreadDessertMenu from "./menu-pages/breaddessert-menu";
import LoginPage from "./pages/login";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/menu/coffee",
    element: <CoffeeMenu />,
  },
  {
    path: "/menu/breakfast",
    element: <BreakfastMenu />,
  },
  {
    path: "/menu/bread-dessert",
    element: <BreadDessertMenu />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
