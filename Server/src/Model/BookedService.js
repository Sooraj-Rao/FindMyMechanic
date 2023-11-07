import mongoose from "mongoose";

const BookedServiceSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  shopId: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  userPhone: {
    type: String,
  },
  shopName: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  serviceCost: {
    type: Number,
  },
  vehicleType: {
    type: String,
  },
  status: {
    type: String,
  },
  bill:{
    type:String
  }
});

export const BookedServiceModel = mongoose.model(
  "BookedServices",
  BookedServiceSchema
);
