import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// Function for adding product
const addProduct = async (req, res) => {

  try {

    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Get images from multer files object
    const files = req.files;
    const image1 = files.image1 && files.image1[0];
    const image2 = files.image2 && files.image2[0];
    const image3 = files.image3 && files.image3[0];
    const image4 = files.image4 && files.image4[0];

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

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
      price: Number(price),
      image: imagesUrl,
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: Date.now()
    }

    // console.log(productData);

    const product = new productModel(productData);

    const save = await product.save();

    res.json({ success: true, message: "Product added successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

// Function for list product
const listProducts = async (req, res) => {

  try {

    const products = await productModel.find({});

    res.json({ success: true, products });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

// Function for removing product
const removeProduct = async (req, res) => {

  try {

     await productModel.findByIdAndDelete(req.body.id);
     res.json({success:true,message:"Product Removed"});

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}


// Function for single product info
const singleProduct = async (req, res) => {

  try {
    
    const {productId} = req.body;
    const product = await productModel.findById(productId);
    res.json({success:true,product});

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

export { addProduct, listProducts, removeProduct, singleProduct };