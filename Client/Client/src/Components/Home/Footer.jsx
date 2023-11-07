import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../../Framer/Framer";
import { Animate2 } from "../../Framer/Framer";
import { Animate3 } from "../../Framer/Framer";
import { Animate4 } from "../../Framer/Framer";
import { Mycontext } from "../Context";

const Footer = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <div className=" h-80">
      <motion.div
        className={`
        border-t-2 pb-10 
        md:justify-evenly
        flex
        justify-evenly
        md:flex-row
        flex-col
        items-center
        text-center
        ${Dark ? "Dark2" : "Light1"}
        ${!Dark && " border-slate-200"}
        `}
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          className=" font-Mont1
        md:w-1/4
        w-full
        pb-4"
          variants={Animate4}
        >
          <h1 className=" text-2xl pt-5 text-center">We Are Social</h1>
          <div className=" text-lg flex flex-col  mx-auto w-full justify-between h-3/4 pt-4">
            <h1 className=" ">
              <i class="fa-brands fa-instagram"></i>
              <span className=" ml-3">Instagram</span>
            </h1>
            <h1 className=" ">
              <i class="fa-brands fa-twitter"></i>
              <span className=" ml-3">Twitter</span>
            </h1>
            <h1 className=" ">
              <i class="fa-regular fa-envelope"></i>
              <span className=" ml-3">Email</span>
            </h1>
            <h1 className="  mr-2">
              <i class="fa-brands fa-github"></i>
              <span className=" ml-3">Github</span>
            </h1>
          </div>
        </motion.div>

        <motion.div
          className=" font-Mont1 
                md:w-1/4
                w-full
                pb-4"
          variants={Animate4}
        >
          <h1 className=" text-2xl pt-5 text-center">Quick Links</h1>
          <div className=" text-lg flex flex-col w-4/6   mx-auto justify-between h-3/4 pt-4">
            <h1>Terms And Conditions</h1>
            <h1>FAQ</h1>
            <h1>Feedback</h1>
            <h1 className=" mr-2">Report a Bug</h1>
          </div>
        </motion.div>

        <motion.div
          className=" font-Mont1 
           md:w-1/4
           w-full
           pb-4
        "
          variants={Animate4}
        >
          <h1 className=" text-2xl pt-9 text-center">NewsLetter</h1>
          <div className=" py-2 w-5/6 mx-auto text-center text-lg">
            <div className=" w-3/4 mx-auto">
              <input
                placeholder="Add your E-mail"
                type="text"
                className=" h-10 my-5 w-full"
              />
              <br />
              <button className=" w-full  h-10 text-white">Submit</button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div
        className={` h-1/6  text-center pt-5 font-Poppins 
      ${Dark ? "Dark2" : "Light1"}
      `}
      >
        <h1>Copyright @ FindMyMechanic</h1>
      </div>
    </div>
  );
};

export default Footer;
