import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true }, //tên để phân loại sản phẩm
  slug: { type: String, required: true, unique: true }, //đường dẫn tới dạng sản phẩm
//   description: { type: String }, //... ko bk có cần thiết ko nx
});

export default CategorySchema = mongoose.model("Categories", CategorySchema)