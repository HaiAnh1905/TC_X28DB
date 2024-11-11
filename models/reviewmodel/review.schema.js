import { type } from "express/lib/response";
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    product_Id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Products", required: true
    }, //mã số sản phẩm được đánh giá
    user_Id:{
        type: mongoose.Schema.Types.ObjectId, ref:"Users", required: true
    }, //mã số user đánh giá
    rating: {type: Number, min: 1, max:5, required: true}, //rating của user
    comment: String, //bình luận
    createdAt: { type: Date, default: Date.now }, //...
    updatedAt: { type: Date, default: Date.now } //...
})

export default ReviewModel = mongoose.model("Reviews", ReviewSchema)
