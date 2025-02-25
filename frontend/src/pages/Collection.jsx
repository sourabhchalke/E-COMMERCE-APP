import React, { useContext, useState } from "react";

import { ShopContext } from "../context/ShopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../frontend_assets/assets";

function Collection() {
  const { products } = useContext(ShopContext);

  const [showFilter,setShowFilter]=useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 pt-10 border-t">

      {/* Left Side of Collection */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
        <img src={assets.dropdown_icon} alt="" className={`w-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} /></p>

      {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="text-sm mb-3 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Men"} />Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Women"} />Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Kids"} />Kids
            </p>
          </div>
        </div>

        {/* Sub-Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="text-sm mb-3 font-medium">SUB-CATEGORIES</p>
          <div className="flex flex-col gap-2 font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Topwear"} />Top-Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Bottomwear"} />Bottom-Wear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={"Winterwear"} />Winter-Wear
            </p>
          </div>
        </div>

      </div>

      
    </div>
  );
}

export default Collection;
