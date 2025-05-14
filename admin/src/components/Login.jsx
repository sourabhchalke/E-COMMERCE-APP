import React, { useState } from "react";
import axios from 'axios';
import { backendUrl } from "../App";
import { toast } from "react-toastify";

function Login({setToken}) {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSubmitHandler = async (e)=>{
        try {
            e.preventDefault();
            // console.log(email,password);

            const response = await axios.post(`${backendUrl}/api/user/admin`,{email,password});
            // console.log(response);
            
            if(response.data.success){
                setToken(response.data.token);
            }else{
              toast.error(response.data.message);
            }


        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

  return (
    <div className="flex min-h-screen items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={onSubmitHandler} action="" className="">
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className="w-full border border-gray-300  rounded-md outline-none px-3 py-2" type="email" placeholder="Enter Your Email" required />
          </div>
          <div className="mb-3 min-w-72">
           <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full border border-gray-300  rounded-md outline-none px-3 py-2" type="password" placeholder="Enter Your Password" required />
          </div>
          <button className="bg-black w-full text-white mt-2 px-4 py-2 rounded-md" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
