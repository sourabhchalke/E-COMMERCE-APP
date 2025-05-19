import { createContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 30;
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Add to cart function
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please Select Product Size");
            return;
        } else {
            toast.success("Successfully Added to Cart");
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
        } else {
            cartData[itemId] = { [size]: 1 };
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Get cart count
    const getCartCount = () => {
        return Object.values(cartItems).reduce((totalCount, item) =>
            totalCount + Object.values(item).reduce((sum, qty) => sum + qty, 0), 0);
    };

    // Update quantity in the cart
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Calculate cart total amount
    const getCartAmount = () => {
        return Object.entries(cartItems).reduce((totalAmount, [itemId, sizes]) => {
            const itemInfo = products.find(product => product._id === itemId);
            return totalAmount + Object.values(sizes).reduce((sum, qty) =>
                sum + (itemInfo?.price || 0) * qty, 0);
        }, 0);
    };

    // Memoized function to get products data
    const getProductsData = useCallback(async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`);
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }, [backendUrl]);

    // Memoized function to get user cart
    const getUserCart = useCallback(async () => {
        if (!token) return;

        try {
            const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }, [backendUrl, token]);

    // useEffect to load products data
    useEffect(() => {
        getProductsData();
    }, [getProductsData]);

    // useEffect to load user cart if token exists
    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        }

        if (token) {
            getUserCart();
        }
    }, [token, getUserCart]);

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
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
        setCartItems
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
