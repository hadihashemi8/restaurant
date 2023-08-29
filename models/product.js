import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    aboutProduct: { type: String, required: true },
    aboutProductFull: { type: String, required: true },
    categories: { type: String, required: true },
    image: { type: String, required: true },
    ourOffer:{type:Boolean , required:false},
    offerPresent:{type:Number , required:false},
} , { timestamps: true })

const Product = mongoose.models.Product || mongoose.model("Product" , productSchema)

export default Product