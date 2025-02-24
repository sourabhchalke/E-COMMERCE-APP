import {createContext} from 'react';
import {products} from '../frontend_assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₹'; //Unicode representation of rupee symbol is [const currency = '\u20B9'];
    const delivery_fee = 30;

    const value = {
        products,
        currency,
        delivery_fee
    }

    console.log(props.children);

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;