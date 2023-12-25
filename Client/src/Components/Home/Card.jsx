import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../../Framer/Framer";
import { Animate2 } from "../../Framer/Framer";
import { Animate3 } from "../../Framer/Framer";
import { Mycontext } from "../Context";

const Card = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const data = [
    {
      heading: "Seamless Booking,Fast  Repairs",
      info: "Online mechanic booking simplifies the process of scheduling vehicle repairs and maintenance. With a few clicks, you can secure your appointment, and the experts will take care of the rest.",
      info2:
        "Online booking simplifies scheduling vehicle repairs. Few clicks secure appointments, experts handle the rest.",
    },
    {
      heading: "Your Vehicle, Your Schedule",
      info: "Online booking allows you to take control of your vehicle's maintenance on your terms. You decide when & where to book services,is convenient than ever to keep your car in optimal condition.",
      info2:
        "Online booking empowers you to control vehicle maintenance, choosing when and where for ultimate convenience.",
    },
    {
      heading: "The Future of Vehicle Maintenance",
      info: "Online mechanic booking represents the future of automotive care. It's a modern and efficient way for you to maintain your vehicle, offering a hassle-free experience with trusted professionals.",
      info2:
        "Online mechanic booking is the future of vehicle care, offering a hassle-free experience with trusted professionals.",
    },
  ];

  return (
    <div
      className={`h-fit py-10 items-center  
    lg:flex-row
    flex flex-col
    w-full
   justify-center
   ${Dark ? "Dark2" : "Light"}
    `}
    >
      {data.map((item, index) => {
        return (
          <motion.div
            initial={"Offscreen"}
            whileInView={"onScreen"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.1 }}
            variants={Animate2}
            className={`h-fit   rounded-3xl
              lg:m-4
              lg:w-[26rem]
              w-11/12
              m-3
              lg:text-center
              text-jutify
              sm:p-8 p-5
              lg:p-8
              xl:p-8
              lg:h-[18rem] xl:h-fit  
              ${!Dark
                ? "shadow-[10px_10px_15px_-6px] bg-blue-200"
                : " bg-slate-900 text-white "
              }
             
             text-black
        `}
            key={index}
          >
            <motion.h1
              variants={Animate3}
              className=" text-center pb-2  font-Mont2 sm:text-lg text-base"
            >
              {item.heading}
            </motion.h1>
            <motion.h1
              variants={Animate3}
              className=" font-Mont1   sm:text-base text-sm"
            >
              <span className=" hidden lg:block">{item.info}</span>
              <span className="block lg:hidden">{item.info2}</span>
            </motion.h1>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Card;
