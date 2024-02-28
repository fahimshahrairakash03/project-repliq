import { createBrowserRouter } from "react-router-dom";
import Mian from "../layout/Mian";
import Products from "../pages/Products/Products";
import LeftSide from "../components/LeftSide/LeftSide";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian></Mian>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
    ],
  },
]);
