import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

// Function for adding product
const addProduct = async(req,res)=>{

    try{

        const {name,description,price,category,subCategory,sizes,bestseller}=req.body;

        // Get images from multer files object
        // const files = req.files;
        // const image1 = req.files.image1 && req.files.image1[0];
        // const image2 = req.files.image2 && req.files.image2[0];
        // const image3 = req.files.image3 && req.files.image3[0];
        // const image4 = req.files.image4 && req.files.image4[0];

         // Get images from multer files object
         console.log(req.files);
         const files = req.files;
         const image1 = files.image1 && files.image1[0];
         const image2 = files.image2 && files.image2[0];
         const image3 = files.image3 && files.image3[0];
         const image4 = files.image4 && files.image4[0];

        const images = [image1,image2,image3,image4].filter((item)=> item !==undefined);

        const imagesUrl = await Promise.all(
            images.map(async (item) => {
              try {
                const result = await cloudinary.uploader.upload(item.path, {
                  resource_type: 'image'
                });
                return result.secure_url;
              } catch (err) {
                console.error("Cloudinary upload error:", err);
                return null; // so it doesn’t crash everything
              }
            })
          );

        const productData = {
            name,
            description,
            price:Number(price),
            image:imagesUrl,
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller:bestseller === "true" ? true : false,
            date:Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);

        const save = await product.save();

        res.json({success:true,message:"Product added"});

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }

}

// Function for list product
const listProducts = async(req,res)=>{
    
}

// Function for removing product
const removeProduct = async(req,res)=>{
    
}


// Function for single product info
const singleProduct = async(req,res)=>{
    
}

export {addProduct,listProducts,removeProduct,singleProduct};