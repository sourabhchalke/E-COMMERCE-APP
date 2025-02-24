import React, { useContext } from 'react'
import {ShopContext} from "../context/ShopContext";

function LatestCollection() {

    const {products,currency,delivery_fee} = useContext(ShopContext);

    console.log(products);
    console.log(currency);
    console.log(delivery_fee);

  return (
    <div>
       
    </div>
  )
}

export default LatestCollection;
