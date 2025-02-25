import React, { useContext, useEffect, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../frontend_assets/assets";
import Title from "../components/Title";

function Collection() {
  const [showFilter, setShowFilter] = useState(false);

  const { products } = useContext(ShopContext);

  const [filterProducts, setFilterProducts] = useState([]);

  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory]=useState([]);

  const toggleCategory=(e)=>{

    if(category.includes(e.target.value)){
        setCategory(prev=> prev.filter(item => item !== e.target.value));
    }else{
      setCategory(prev=> [...prev,e.target.value]);
    }

  }

  const toggleSubCategory=(e)=>{

    if(subCategory.includes(e.target.value)){
        setSubCategory(prev=> prev.filter(item => item !== e.target.value));
    }else{
      setSubCategory(prev=> [...prev,e.target.value]);
    }

  }

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  // useEffect(()=>{
  //   console.log(category);
  // },[category]);

  // useEffect(()=>{
  //   console.log(subCategory);
  // },[subCategory]);

  // Filter
  const applyFilter=()=>{

    let productsCopy = products.slice();

    if(category.length>0){
        productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length>0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    
    setFilterProducts(productsCopy);

  }
  useEffect(()=>{
    applyFilter();
  },[category,subCategory]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-10 border-t ">
      {/* Left Side of Collection */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`w-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>

        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-10 me-4 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} />
              Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} />
              Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} />
              Kids
            </p>
          </div>
        </div>

        {/* Sub-Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 me-3 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="text-sm mb-3 font-medium">SUB-CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory} />
              Top-Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} />
              Bottom-Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory} />
              Winter-Wear
            </p>
          </div>
        </div>
      </div>

      {/* Right Side of Collection */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* Product Sort */}
          <select
            className="border-2 border-gray-300 text-sm px-2"
            name=""
            id=""
          >
            <option value="relavant">Sort by : Relevant</option>
            <option value="low-high">Sort by : Low to High</option>
            <option value="high-low">Sort by : High to Low</option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-6 mt-10">
          {filterProducts.map((item, index) => {
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
    </div>
  );
}

export default Collection;
