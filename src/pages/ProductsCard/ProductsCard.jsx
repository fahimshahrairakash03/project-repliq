import React from "react";
import "./ProductsCard.css";

const ProductsCard = ({ product, handleProducts }) => {
  const { name, img, price, id } = product;
  return (
    <div>
      <div className=" border border-black  ">
        <img className="h-24 lg:h-36 " src={img} alt="" />
        <div className="hover:bg-slate-200 ">
          <p
            style={{ color: "#8b939a" }}
            className="text-center text-sm font-semibold hover:text-white"
          >
            ${price}
          </p>
          <hr />
          <p
            onClick={() => handleProducts(product)}
            style={{ color: "#8b939a" }}
            className="text-center btn btn-sm w-full rounded-none hover:text-white "
          >
            {name.slice(0, 5)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
