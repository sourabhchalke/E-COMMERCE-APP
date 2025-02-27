import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "../components/Title";

function RelatedProducts({ category, subCategory }) {
  console.log("Category", subCategory);

  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);
  console.log(products);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();

      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      console.log(productsCopy.slice(0, 5));
      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-14">
      <div className="text-3xl text-center">
        <Title text1={"RELATED"} text2={"PRODUCTS"}/>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  my-12">
        {related.map((item, index) => {
          return (
            <ProductItem
              key={index}
              id={item._idcd}
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

export default RelatedProducts;
