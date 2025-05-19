import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../frontend_assets/assets';
import {useLocation} from 'react-router-dom';


function SearchBar() {

    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const location = useLocation();

    useEffect(()=>{
        // console.log(location.pathname);
    },[]);

  return showSearch ?  (
    <div className={`border-t border-b bg-gray-50  text-center ${location.pathname==="/collection" ? "": "hidden"}`}>
      <div className='inline-flex itens-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img src={assets.search_icon} alt="" />
      </div>
      <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar;
