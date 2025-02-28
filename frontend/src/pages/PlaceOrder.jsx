import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";

function PlaceOrder() {

  const [method,setMethod]=useState('cod');
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex justify-between items-center">
      {/* -----Left Side----- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[40%]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First Name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Pin code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* -----Right Side----- */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div onClick={()=>setMethod('gpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'gpay'?'bg-green-500':""}`}></p>
              <img className="h-8 mx-4" src={assets.gpay_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('phonepe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'phonepe'?'bg-green-500':""}`}></p>
              <img className="h-12" src={assets.phonepe_logo} alt="" />
            </div>
            <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method=== 'cod'?'bg-green-500':""}`}></p>
              <p className="text-sm">CASH ON DELIVERY</p>
            </div>
          </div>

        <div className="w-full mt-6 text-end">
          <button onClick={()=> navigate('/orders')} className="bg-black text-white py-3 px-14 text-sm">PLACE ORDER</button>
        </div>

        </div>
      </div>
    </div>
  );
}

export default PlaceOrder;
