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
import AniShop from "../LoadingAnimate/AniShop";
import ScrollTo from "../Components/ScrollTo";

const Service = ({ booked, setbooked, Message }) => {
  const [load, setload] = useState({
    one: true,
    two: false,
  });
  const [shopsList, setshopsList] = useState([]);
  const [serviceid, setserviceid] = useState("");

  const ServiceData = JSON.parse(localStorage.getItem("Service"));

  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark ,Server} = context;

  let id = ServiceData.shopId;
  let vehicle = ServiceData.vehicle;
  let userId = localStorage.getItem("user");

  const fetchData = async () => {
    try {
      const shops = await axios.get(
        `${Server}/BookService/services/${id}/${vehicle}`
      );
      setload({ ...load, one: false });
      setshopsList(shops.data);
    } catch (error) {
      setload({ ...load, one: false });
      console.log(error);
    }
  };

  const BookService = async (serviceId) => {
    setserviceid(serviceId);
    let shopId = id;
    let data = { serviceId, userId, shopId };
    try {
      setload({ ...load, two: true });
      const book = await axios.post(
        `${Server}/BookService/book`,
        data
      );
      setload({ ...load, two: false });
      if (book.data.code) {
        Message(book.data.message);
        setbooked(true);
      } else {
        toast.error(book.data.message);
      }
    } catch (error) {
      setload({ ...load, two: false });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`py-32   ${Dark ? "Dark3" : "Light3"}`}>
      <ScrollTo/>
      <h1 className={`  text-center pb-10 px-2 font-Poppins2 text-2xl`}>
        {load.one && `Fetching Services for your ${vehicle}...`}
        {!load.one && shopsList.length > 0 && `Choose a Service for your ${vehicle}`}
      </h1>
      <motion.div
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        className={` flex gap-10 font-Poppins1 flex-wrap flex-grow justify-center 
      
        `}
      >
        {load.one ? (
          <AniShop num={2} />
        ) : (
          shopsList.map((item, index) => {
            return (
              <div
                className={`h-[27rem]  rounded-lg 
            sm:w-[20rem]
            w-[18rem]
            mx-2
            p-4
            text-white
            ${Dark ? "Dark2" : "Light"}
          `}
                key={index}
              >
                <div className=" h-4/6 ">
                  <img src="../../img2.jpg" className=" h-full" />
                </div>
                <div className=" text-xl pt-4 text-center">
                  <h1>Service: {item.serviceName}</h1>
                  <h1>Rs. {item.serviceCost}</h1>
                  <button
                    className=" px-4 py-2 mt-2 text-white"
                    onClick={() => BookService(item._id)}
                  >
                    <h1>
                      {load.two && item._id == serviceid ? (
                        <PulseLoader color="white" size={8} />
                      ) : (
                        "Book Service"
                      )}
                    </h1>
                  </button>
                </div>
              </div>
            );
          })
        )}
        {!load.one && shopsList.length == 0 && (
          <div className=" text-center">
            <h1 className=" text-3xl">
              No Service found for{" "}
              {vehicle == "2_Wheeler" ? "2 wheeler" : vehicle}
            </h1>
            <button
              className=" p-3 mt-14 text-white"
              onClick={() => navigate("/shop")}
            >
              Check other shops
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Service;
