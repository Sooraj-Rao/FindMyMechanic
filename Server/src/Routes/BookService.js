import express from "express";
import { ServiceModel } from "../Model/Service.js";
import { Shopmodel } from "../Model/Shop.js";
import { BookedServiceModel } from "../Model/BookedService.js";
import {Usermodel} from '../Model/User.js'

const router = express.Router();

//Get Shop using PinCode
router.get("/shops/:pincode", async (req, res) => {
  const { pincode } = req.params;
  try {
    const Shops = await Shopmodel.find({ shopPincode: pincode });
    res.json(Shops);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error Fetchig Shops-Back" });
  }
});

// View Service
router.get("/services/:id/:vehicle", async (req, res) => {
  let { id, vehicle } = req.params;
  if(vehicle=='2_Wheeler') vehicle='2 Wheeler'
  try {
    const Shops = await ServiceModel.find({ shopId: id, vehicleType: vehicle });
    res.json(Shops);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Error Fetchig Services-Back" });
  }
});

// book Service

router.post("/book/", async (req, res) => {
  const { userId, serviceId, shopId } = req.body;
  try {
    const shopNameFind = await Shopmodel.findOne({ _id: shopId });
    let { shopName } = shopNameFind;
    const ServiceDetail = await ServiceModel.findOne({ _id: serviceId });
    const { serviceName, serviceCost, vehicleType } = ServiceDetail;
    const User=await Usermodel.findOne({_id:userId}) 
    const {name,phone,email}=User;
    let status = "Yet to Approve";
    let bill="No bills"
    const check = await BookedServiceModel.findOne({
      userId,
      shopId,
      shopName,
      vehicleType,
      serviceName,
    });
    if (check) {
      return res.json({ message: `You have already booked ${serviceName} service for ${vehicleType}` });
    }
    const NewBook = new BookedServiceModel({
      userId,
      shopId,
      shopName,
      userName:name,
      userEmail:email,
      userPhone:phone,
      serviceName,
      serviceCost,
      vehicleType,
      status,
      bill
    });
    await NewBook.save();
    res.json({message:`Your Service ${serviceName} for ${vehicleType} is Booked Succesfully`,code:true})
  } catch (error) {
    console.log(error);
    res.json({message:'Error Booking -BackEnd'})
  }
});

export { router as BookServiceRouter };
