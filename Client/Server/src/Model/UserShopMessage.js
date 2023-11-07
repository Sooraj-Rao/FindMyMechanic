import mongoose from "mongoose";

const UsershopMsg = new mongoose.Schema({
  userId: {
    type: String,
  },
  shopId: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  shopName: {
    type: String,
  },
  messageTitle: {
    type: String,
  },
  message: {
    type: String,
  },
});

export const UserToShopMsgModel = mongoose.model("UserToShops", UsershopMsg);
