import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import axios from "axios";
import { Mycontext } from "../Components/Context";

const ViewBill = ({ Message, setbillOpen }) => {
  const [data, setdata] = useState([]);
  const userId = localStorage.getItem("user");

  const fetch = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/bill/${userId}`);
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const Bill = (item) => {
    Message(item);
    setbillOpen(true);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <motion.div
      className={` h-fit py-20
      mt-20 
      mx-auto
  w-full
     overflow-x-scroll
     ${Dark ? " bg-teal-900 text-white" : "Light4"}
       `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
    >
      <h1 className=" text-center text-3xl  font-Poppins1 ">Bills</h1>
      <div
        className={` shadow-[0rem_0rem_2rem_-5px] rounded-xl shadow-blue-950  h-fit mx-auto mt-10
      
      w-11/12 
      sm:w-5/6
      text-lg
      p-4
      ${Dark?'Dark4':'Light'}
      `}
      >
        {data.map((item, i) => {
          return (
            <div
              className={`w-full flex justify-around h-fit my-3 px-6 py-8
            lg:flex-row
              flex-col
             gap-4
             text-white
             rounded-xl
             font-Poppins1
             ${Dark ? "Dark3" : "Light4"}
            `}
              key={i}
            >
              <div>
                <span>Shop : </span>
                <span>{item.shopName}</span>
              </div>
              <div>
                <span>Service : </span>
                <span>{item.serviceName}</span>
              </div>
              <div>
                <span>Amount: </span>
                <span
                  className={`  ml-2 text-teal-600
                ${!Dark && " text-blue-600"}
                `}
                >
                  Rs. {item.total}
                </span>
              </div>
              <h1>
                <button
                  className="py-2 px-5 text-white"
                  onClick={() => Bill(item)}
                >
                  View bill
                </button>
              </h1>
              {/* <hr className=" block lg:hidden mt-4" /> */}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ViewBill;
