import express from 'express';

import { addToCart,updateCart,getUserCart } from '../controllers/cartController.js';
import authUser from '../middleware/auth.js';

const cartRouuter = express.Router();

cartRouuter.post('/get',authUser,getUserCart);
cartRouuter.post('add',authUser,addToCart);
cartRouuter.post('/update',authUser,updateCart);

export default cartRouuter;