import React from "react";
import RightSide from "../components/RightSide/RightSide";
import { Outlet } from "react-router-dom";

const Mian = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Mian;
