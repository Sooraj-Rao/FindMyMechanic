import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  shopId: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  vehicleType: {
    type: String,
  },
  serviceImage: {
    type: String,
  },
  serviceCost: {
    type: Number,
  }
});

export const ServiceModel = mongoose.model("Services", ServiceSchema);
