import jwt from 'jsonwebtoken';

const adminAuth = async(req,res,next)=>{
    try {
        
        const {token} = req.headers;

        if(!token){
           return res.json({success:false,message:"Not Authorized Login Again"});
        }

        const token_decode =  jwt.verify(token,process.env.JWT_SECRET);
        // console.log(token_decode);

        if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({message:false,message:"Not Authorized Login Again"});
        }

        // If user is authorized then only it will move to next step
        next();

    } catch (error) {
        
    }
}

export default adminAuth;