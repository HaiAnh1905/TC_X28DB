import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true }, //tên đăng nhập
  fullname: { type: String, required: true }, //tên tài khoản
  email: { type: String, required: true, unique: true }, //email đăng ký
  password: { type: String, required: true }, //mật khẩu được hashcode
  createdAt: { type: Date, default: Date.now }, //được tạo lúc nào
  role: { type: String, default: "guest", required: true }, //4 role cơ bản: Admin/staff/member và guest
  gender: String, // giới tính
  phone: Number, //Số điện thoại liên hệ
  address: String, //Địa chỉ giao hàng
  bill_Address: Number, //địa chỉ thanh toán
  dateOfBirth: Date, //ngày sinh
  loyalty_point: Number, //điểm thưởng tích lũy
  payment_method: {
    type: String,
    default: "cash",
  }, //Phương thức thanh toán: cash, paypal, online paying
  isVerifed: Boolean, //trạng thái xác minh tài khoản
  profileImg: String, //avatar
  promoCode: [String], //mã giảm giá, phiếu giảm giá
  shipping_preferences: {
    type: String,
    default: "standard",
  }, //tùy chọn giao hàng: standard, fast, superfast,....
});

const UserModel = mongoose.model("Users", UserSchema);
export default UserModel;
