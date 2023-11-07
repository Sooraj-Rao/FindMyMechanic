import express from "express";
import { Usermodel } from "../Model/User.js";
import { contactModel } from "../Model/Contact.js";
import { AdminMsgModel } from "../Model/AdminMsg.js";
import { BookedServiceModel } from "../Model/BookedService.js";
import { Shopmodel } from "../Model/Shop.js";
import { ServiceModel } from "../Model/Service.js";
import { UserToShopMsgModel } from "../Model/UserShopMessage.js";
import { BillModel } from "../Model/Bill.js";

const router = express.Router();

//Sign Up

router.post("/signin", async (req, res) => {
  const { name, password, phone, email } = req.body;
  const user = await Usermodel.findOne({
    $or: [{ name: name }, { phone: phone }, { email: email }],
  });
  try {
    if (user) {
      if (user.name == name)
        return res.json({ message: "Username Already exist" });

      if (user.phone == phone)
        return res.json({ message: "Phone number Alreay Exist" });

      if (user.email === email)
        return res.json({ message: "Email Alreay Exist" });
    } else {
      const NewUser = new Usermodel({ name, password, phone, email });
      await NewUser.save();
      res.json({ message: "Successfully Registered" });
    }
  } catch (error) {
    res.json({ message: "Some Error Occurred in BackEnd" });
    console.log("Registration Error: ", error);
  }
});

//Login

router.post("/login", async (req, res) => {
  const { password, email } = req.body;

  const user = await Usermodel.findOne({ email });
  try {
    if (!user) return res.json({ message: "Invalid Email" });

    if (password !== user.password) {
      return res.json({ message: " Password is Incorrect" });
    }
    res.json({ message: "Login Succesfully", id: user._id });
  } catch (error) {
    res.json({ message: "Some Error Occurred in BackEnd" });
    console.log("Registration Error: ", error);
  }
});

//Conact

router.post("/contact", async (req, res) => {
  const { message, email, type } = req.body;
  try {
    const NewMessage = new contactModel({ message, email, type });
    await NewMessage.save();
    res.json({ message: "Message sent" });
  } catch (error) {
    res.json({ message: "Some Error Occurred in BackEnd" });
    console.log("Conatct Error: ", error);
  }
});

//Profile

router.get("/manageProfile/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Usermodel.findOne({ _id: id });
    res.json(user);
  } catch (error) {
    console.log(error);
  }
});

//View Notification
router.get("/notification/view", async (req, res) => {
  try {
    const message = await AdminMsgModel.find({});
    res.json({ message: message, code: "Admin" });
  } catch (error) {
    console.log(error);
  }
});

//View Sent Messages
router.get("/notification/sent/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const message = await UserToShopMsgModel.find({ userId });
    res.json({ message: message });
  } catch (error) {
    console.log(error);
  }
});

// View Service Details

router.get("/serviceDetails/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const Services = await BookedServiceModel.find({ userId });
    res.json(Services);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error Fetching Service Details -Back" });
  }
});

//Cancel request

router.post("/serviceDetails/cancel/:requestId", async (req, res) => {
  const { requestId } = req.params;
  try {
    const CancelId = await BookedServiceModel.findOne({ _id: requestId });
    console.log(CancelId);
    let status = "Request Canceled";
    await BookedServiceModel.updateOne(
      { _id: requestId },
      { $set: { status } }
    );
    res.json({ message: "Service Request Canceled" });
  } catch (error) {
    res.json({ message: "Cancel Failed in BackEnd" });
    console.log("Cancel Error: ", error);
  }
});

//UserToShop Message

router.post("/shopMsg", async (req, res) => {
  const { userEmail, userId, shopId, shopName } = req.body[0];
  const { message, messageTitle } = req.body[1];
  try {
    const SendMessage = new UserToShopMsgModel({
      userEmail,
      userId,
      shopId,
      shopName,
      message,
      messageTitle,
    });
    await SendMessage.save();
    res.json({ message: "Message Sent" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Error Send Message to Shop" });
  }
});

//View Bill

router.get("/bill/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const Bills = await BillModel.find({ userId });
    res.json(Bills);
  } catch (error) {
    console.log(error);
    res.json({ message: "Error Fetching Bills -Back" });
  }
});
export { router as UserRouter };
