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
    <div className={`  ${Dark ? " bg-slate-900 text-white" : "Light4"}`}>
      <ScrollTo />
      <motion.div
        className={` h-fit py-20
      sm:mt-20
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
        <h1 className=" text-center text-3xl  font-Poppins1 ">Bills</h1>

        <div
          className={` shadow-[0rem_0rem_2rem_-5px] rounded-xl shadow-blue-950  h-fit mx-auto mt-10
    
    w-11/12 
    sm:w-5/6
    text-lg
    sm:p-10
    p-4
    ${Dark ? "Dark3" : "Light4"}
    ${!Dark
              ? "        shadow-[0rem_0rem_2rem_-4px] "
              : "        shadow-[0rem_0rem_2rem_-4px] "
            }
    ${!Dark ? "shadow-blue-900" : " shadow-gray-700"}
    `}
        >
          {load ? (
            <AniBill />
          ) : data.length > 0 ? (
            data.map((item, i) => {
              return (
                <div
                  className={`w-full flex justify-around h-fit my-3 px-6 pt-8 pb-6
          lg:flex-row
            flex-col
           gap-4
           text-white
           rounded-xl
           font-Poppins1
           ${Dark ? "Dark2" : "Light2"}
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
                </div>
              );
            })
          ) : (
            <h1
              className={`rounded-xl font-Mont1 sm:text-2xl text-lg text-center sm:py-16 py-5 
            ${Dark ? "Dark4" : "Light2"}
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
