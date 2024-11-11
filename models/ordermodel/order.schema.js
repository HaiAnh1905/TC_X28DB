import { type } from "express/lib/response";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  user_Id: {
    type: mongoose.Schema.ObjectId,
    ref: "Users",
    required: true,
  }, //id của người mua
  items: [
    {
      product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true,
      }, //mã số sản phẩm
      quantity: { type: Number, required: true }, //số lượng đặt mua
      price: { type: Number, required: true }, //tổng giá thành :v
    },
  ], //mảng chứa các sản phẩm được đặt
  status: { type: String, default: "Pending" }, // 3 trạng thái: Pending, Shipping, Delivered,
  createdAt: { type: Date, default: Date.now }, //...
  updateAt: { type: Date, default: Date.now }, //...
});

export default OrderModel = mongoose.model("Orders", OrderSchema);
