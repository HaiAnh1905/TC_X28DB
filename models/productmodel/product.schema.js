import req from "express/lib/request";
import { type } from "express/lib/response";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, // tên sản phẩm
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories",
    required: true,
  }, //VD: laptop, card đồ họa
  price: { type: Number, required: true }, // giá thành
  description: { type: String, required: true },//mô tả
  brand: { type: String, required: true },//hãng: asus, msi, lenovo, ...
  stock: { type: Number, default: 0 }, //số lượng tồn kho
  spec: {
    type: Object,
    required: true
  }, //thông số kỹ thuật
  images: [String], //ảnh mô tả
  createdAt: { type: Date, default: Date.now }, //được thêm vào
  updatedAt: { type: Date, default: Date.now }, //được chỉnh sửa
  rating: { type: Number, default: 0 }, //rating
});

export default ProductModel = mongoose.model("Products", ProductSchema);
