import React from "react";
import { FcPlus, FcMinus } from "react-icons/fc";
import { FiCheckSquare, FiTrash } from "react-icons/fi";

const CartProducts = ({ cartItem, handleDeleteItem }) => {
  const { name, price, id } = cartItem;
  return (
    <div className="">
      <div className="flex justify-between items-center border px-2">
        <FiCheckSquare />
        <p className="" style={{ width: "100px" }}>
          {name}
        </p>
        <p className="">{price}</p>
        <p className="flex justify-center items-center font-bold">
          <FcMinus />1<FcPlus />
        </p>
        <p className="">{price}</p>
        <button
          className="hover:text-red-700"
          onClick={() => handleDeleteItem(id)}
        >
          {" "}
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
