import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import axios from "axios";
import { Mycontext } from "../Components/Context";
import AniBill from "../LoadingAnimate/AniBill";
import ScrollTo from "../Components/ScrollTo";
import toast from "react-hot-toast";

const ViewBill = ({ Message, setbillOpen }) => {
  const [load, setload] = useState(false);
  const [data, setdata] = useState([]);
  const userId = localStorage.getItem("user");

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  const fetch = async () => {
    try {
      setload(true);
      const res = await axios.get(`${Server}/bill/${userId}`);
      setload(false);
      setdata(res.data);
    } catch (error) {
      setload(false);
      toast.error('Failed to Fetch Bill')
    }
  };

  const Bill = (item) => {
    Message(item);
    setbillOpen(true);
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div className={`  ${Dark ? "Dark2" : "Light4"} py-2`}>
      <ScrollTo />
      <motion.div
        className={` h-fit py-20
      mt-10 
      mx-auto
  w-full
     overflow-x-scroll
   
       `}
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        variants={Animate4}
      >
        <h1 className=" text-center text-2xl  font-Poppins1 ">Bills</h1>

        <div
          className={`  h-fit mx-auto 
    w-11/12 
    sm:w-5/6
    p-6
    `}
        >
          {load ? (
            <AniBill />
          ) : data.length > 0 ? (
            data.map((item, i) => {
              return (
                <div
                  className={`w-full flex justify-around h-fit my-8 px-6 pt-10 pb-8
          lg:flex-row
            flex-col
           gap-4
           text-white
           rounded-xl
           font-Poppins1
           ${Dark ? " bg-gray-900" : "Light6"}
          `}
                  key={i}
                >
                  <div>
                    <span>S.No : </span>
                    <span>{i + 1}</span>
                  </div>
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
                      className="py-1 px-4 text-white"
                      onClick={() => Bill(item)}
                    >
                      View Bill
                    </button>
                    {/* <button
                      className="py-1 px-4 ml-2 text-white"
                      
                    >
                      Pay Bill
                    </button> */}
                  </h1>
                </div>
              );
            })
          ) : (
            <h1
              className={`rounded-xl font-Mont1 sm:text-2xl text-lg text-center sm:py-8 py-5 
            ${Dark ? "Dark4" : "Light6"}
            `}
            >
              No bills found..
            </h1>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ViewBill;
