import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Product() {
  const { productId } = useParams();

  const { products } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2">

      {/* Product Data */}
      <div className="">{/*Display product images*/}

        {/* -----Product Images----- */}
         <div className="flex">
            <div className="">
                {
                  productData.image.map((item,index)=>{
                    return <>
                      <img onClick={()=>setImage(item)} src={item} key={index} className="w-40" alt="" /> {/*Getting multiple images */}
                    </>
                  })
                }
            </div>
            <div className="w-full sm:w-[80%]">
                <img src={image} className="" alt="" />
            </div>
         </div>

      </div>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Product;
