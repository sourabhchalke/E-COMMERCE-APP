import {createContext, useEffect, useState} from 'react';
import {products} from '../frontend_assets/assets';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₹'; //Unicode representation of rupee symbol is [const currency = '\u20B9'];
    const delivery_fee = 30;

    const [search,setSearch] = useState("");
    const [showSearch,setShowSearch] = useState(false);

    const [cartItems,setCartItems]=useState({});

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error("Please Select Product Size");
            return;
        }else{
            toast.success("Successfully Added to Cart");
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }else{
                cartData[itemId][size] =1;
            }
        }else{
            cartData[itemId]={};
            cartData[itemId][size]=1;
        }
        setCartItems(cartData);

    }

  const getCartCount = () => {

    let totalCount = 0;

    for(const items in cartItems){
        for(const item in cartItems[items]){
            try{
                if(cartItems[items][item]>0){
                    totalCount += cartItems[items][item];
                }
            }catch(error){

            }
        }
    }
    return totalCount;
  }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        showSearch,
        setSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;