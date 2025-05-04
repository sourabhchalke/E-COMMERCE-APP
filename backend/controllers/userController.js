
import userModel from '../models/userModel.js';
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Create token using user id
const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

// Route for user login
const loginUser = async(req,res)=>{

}

// Route for user register
const registerUser = async(req,res)=>{
    try{

        const {name,email,password}=req.body;

        // Checking user already exists or not
        const exists = await userModel.findOne({email});
        
        if(exists){
            return res.json({success:false,message:"User Already Exists"});
        }

        // Validating Email Format & Strong Password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        // Hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        // Creating new User
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save();
        
        //Creating JWS Token
        const token = createToken(user._id);

        res.json({success:true,token});


    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

// Route for Admin Login
const adminLogin = async()=>{
    
}

export {loginUser,registerUser,adminLogin}