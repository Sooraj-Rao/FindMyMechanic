import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Mycontext } from "../Components/Context";

const Shop = () => {
  const [shopsList, setshopsList] = useState([]);
  const pincode = localStorage.getItem("pincode");
  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const fetchData = async () => {
    try {
      const shops = await axios.get(
        `https://findmymechanic.onrender.com/BookService/shops/${pincode}`
      );
      setshopsList(shops.data);
    } catch (error) {
      console.log(error);
    }
  };

  const viewServies = (id) => {
    let shopvehicle = { shopId: id, vehicle: "" };
    localStorage.setItem("Service", JSON.stringify(shopvehicle));
    navigate("/vehicle");
  };

  useEffect(() => {
    fetchData();
  }, [pincode]);

  return (
    <motion.div
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
      className={`flex gap-10 font-Poppins1  flex-wrap flex-grow justify-center py-32 
      ${Dark ? "Dark3" : "Light1"}
      `}
    >
      {shopsList.length > 1 ? (
        shopsList.map((item, index) => {
          return (
            <div
              className={` h-[27rem] bg-slate-800  rounded-lg
          md:w-[20rem]
          w-[17rem]
          mx-3 
          `}
              key={index}
            >
              <div className=" h-4/6 ">
                <img src="../../img.jpg" className=" h-full" />
              </div>
              <div className=" text-xl text-center mt-3 text-white" key={item}>
                <h1>{item.shopName}</h1>
                <h1>{item.shopAddress}</h1>
                <button
                  className=" px-4 py-2 mt-2 "
                  onClick={() => viewServies(item._id)}
                >
                  View Services
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className=" text-center">
          <h1 className=" text-3xl">No Shops found in Pincode {pincode}</h1>
          <button
            className=" p-3 mt-14 text-white"
            onClick={() => navigate("/bookService")}
          >
            Go back
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Shop;
