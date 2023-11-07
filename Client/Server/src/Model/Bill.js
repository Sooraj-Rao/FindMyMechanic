import mongoose from "mongoose";

const Bill = new mongoose.Schema({
  userId: {
    type: String,
  },
  shopId: {
    type: String,
  },
  userName: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  serviceCost: {
    type: Number,
  },
  userPhone: {
    type: Number,
  },
  userEmail: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
  shopName: {
    type: String,
  },
  discount: {
    type: Number,
  },
  total: {
    type: Number,
  },
});

export const BillModel = mongoose.model("Bills", Bill);
