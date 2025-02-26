import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

function Product() {

  const {productId}=useParams();

  const {products}=useContext(ShopContext);
  const [productData,setProductData]=useState([]);
  const [image,setImage]=useState("");

  const fetchProductData = async()=>{

    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        console.log(item);
        setImage(item.image[0]);
        return null;
      }
    })

  }

  useEffect(()=>{
    fetchProductData();
  },[productId]);
 
  return productData ? (
    <div>
      
    </div>
  ): <div className='opacity-0'></div>
}

export default Product;
