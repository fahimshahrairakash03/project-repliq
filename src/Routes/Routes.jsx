import { createBrowserRouter } from "react-router-dom";
import Mian from "../layout/Mian";
import Products from "../pages/Products/Products";

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
