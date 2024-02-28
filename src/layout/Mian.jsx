import React from "react";
import LeftSide from "../components/LeftSide/LeftSide";
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
