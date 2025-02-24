import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollection() {
  const { products, currency, delivery_fee } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  

  useEffect(() => {
    setLatestProducts(products.slice(0,10));
  }, []);

  console.log(products);
  console.log(currency);
  console.log(delivery_fee);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-md text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          repellat ea, possimus eaque voluptate atque aperiam quia assumenda,
          doloribus magni blanditiis recusandae non! Laudantium impedit
          excepturi voluptatem cumque, rem quam.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-7 mt-5">
        {latestProducts.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </div>

      
    </div>
  );
}

export default LatestCollection;
