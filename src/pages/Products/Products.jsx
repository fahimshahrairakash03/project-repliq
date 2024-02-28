import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import Cart from "../Cart/Cart";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleProducts = (product) => {
    console.log(product);
    const newCart = [...cartItems, product];
    setCartItems(newCart);
  };
  const handleDeleteItem = (id) => {
    const remainingCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(remainingCartItems);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <Cart cartItems={cartItems} handleDeleteItem={handleDeleteItem}></Cart>
      <div className="px-5 mt-3">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <button class="btn btn-sm  mb-3 btn-outline btn-primary">
            All Categories
          </button>
          <button class="btn btn-sm  mb-3 btn-outline btn-primary">
            Electronics
          </button>
          <button class="btn btn-sm  mb-3 btn-outline btn-primary">
            Home & Lifestyle
          </button>
          <button class="btn  btn-sm mb-3 btn-outline btn-primary">
            Men Fashion
          </button>
          <button class="btn  btn-sm mb-3  btn-outline btn-primary">
            Women Fashion
          </button>
        </div>
        <div className="  grid grid-cols-4 gap-10 lg:gap-7">
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              handleProducts={handleProducts}
              product={product}
            ></ProductsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
