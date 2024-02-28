import React from "react";
import { FcCancel } from "react-icons/fc";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { TbDiscount } from "react-icons/tb";
import { FaHandHoldingUsd } from "react-icons/fa";

const CartBill = ({ cartItems }) => {
  let total = 0;
  let shipping = 0;

  for (const product of cartItems) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.075).toFixed(2);
  const grandTotal = total + shipping + parseFloat(tax);
  return (
    <div>
      <div className="px-2 flex justify-end">
        <div className="grid grid-cols-1 divide-y">
          <p className="text-gray-400">Subtotal: ${total}</p>

          <p className="text-gray-400">Tax:${tax}</p>

          <p className="text-gray-400">Shipppping:${shipping}</p>
          <p className="text-blue-500 font-semibold">Discount on Cart:${0}</p>
        </div>
      </div>

      <div className="px-3">
        <div
          style={{ backgroundColor: "#e1eaf9" }}
          className=" py-2 px-2 mt-2 rounded flex justify-between items-center "
        >
          <span className="text-blue-500 text-sm">
            Products Count: {cartItems.length}
          </span>
          <span className="text-blue-500 text-lg  font-semibold	">
            SubTotal: ${grandTotal}
          </span>
        </div>
      </div>
      <div className="px-3 mt-2">
        <button
          style={{ backgroundColor: "#fadedd" }}
          className="btn btn-active me-2 lg:me-8 text-red-600 font-semibold text-lg border-none"
        >
          <FcCancel />
          Cancel
        </button>
        <button
          style={{ backgroundColor: "#dee1f4" }}
          className="btn btn-active me-2 lg:me-8 text-blue-600 font-semibold text-lg border-none"
        >
          <FaHandsHoldingCircle /> Hold
        </button>
        <button
          style={{ backgroundColor: "#dee1f4" }}
          className="btn btn-active me-2 lg:me-8 text-blue-600 font-semibold text-lg border-none"
        >
          <TbDiscount /> Discount
        </button>
        <button
          style={{ backgroundColor: "#dee1f4" }}
          className="btn btn-active me-2 mt-2 lg:mt-0 lg:me-8 text-blue-600 font-semibold text-lg border-none"
        >
          <FaHandHoldingUsd /> Pay Now
        </button>
      </div>
    </div>
  );
};

export default CartBill;
