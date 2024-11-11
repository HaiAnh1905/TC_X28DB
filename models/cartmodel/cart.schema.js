import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
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
  ],
});

export default CartModel = mongoose.model("Carts", CartSchema)
