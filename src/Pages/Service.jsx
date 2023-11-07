import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "../Components/Context";

const Service = ({ booked, setbooked, Message }) => {
  const [shopsList, setshopsList] = useState([]);

  const ServiceData = JSON.parse(localStorage.getItem("Service"));

  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  let id = ServiceData.shopId;
  let vehicle = ServiceData.vehicle;
  let userId = localStorage.getItem("user");

  const fetchData = async () => {
    try {
      const shops = await axios.get(
        `https://findmymechanic.onrender.com/BookService/services/${id}/${vehicle}`
      );
      setshopsList(shops.data);
    } catch (error) {
      console.log(error);
    }
  };

  const BookService = async (serviceId) => {
    let shopId = id;
    let data = { serviceId, userId, shopId };
    try {
      const book = await axios.post(
        `https://findmymechanic.onrender.com/BookService/book`,
        data
      );
      if (book.data.code) {
        Message(book.data.message);
        setbooked(true);
      } else {
        toast.error(book.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <motion.div
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className={` flex gap-10 font-Poppins1 flex-wrap flex-grow justify-center py-32 
        ${Dark ? "Dark3" : "Light3"}
        `}
      >
        {shopsList.length > 0 ? (
          shopsList.map((item, index) => {
            return (
              <div
                className=" h-[27rem] bg-slate-700   rounded-lg 
            sm:w-[20rem]
            w-[18rem]
            mx-2
            text-white
          "
                key={index}
              >
                <div className=" h-4/6 ">
                  <img src="../../img2.jpg" className=" h-full" />
                </div>
                <div className=" text-xl pt-4 text-center">
                  <h1>Service: {item.serviceName}</h1>
                  <h1>Rs. {item.serviceCost}</h1>
                  <button
                    className=" px-4 py-2 mt-2"
                    onClick={() => BookService(item._id)}
                  >
                    <h1>Book Service</h1>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className=" text-center">
            <h1 className=" text-3xl">No Service found for {vehicle}</h1>
            <button className=" p-3 mt-14" onClick={() => navigate("/shop")}>
              Check other shops
            </button>
          </div>
        )}
      </motion.div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Service;
