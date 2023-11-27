import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Animate3 } from "../../Framer/Framer";
import LazyLoad from "react-lazyload";

const LandingPage = () => {
  return (
    <motion.div
      className="h-[50rem] text-white "
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
    >

      <div
        className="LandingPage h-full
      "
      >
        <div className="Landing-In w-full h-full ">
          <motion.h1
            variants={Animate3}
            className=" font-Poppins3  
            pt-44
            sm:text-center
            sm:text-[6vw]
            text-[2.5rem]
            sm:pl-0
            pl-7
            "
          >
            <span className=" block sm:hidden"> Book nearby mechanics in seconds.</span>
            <span className=" hidden sm:block">Find Your Nearby Mechanics Book Services Instantly</span>
          </motion.h1>
          <motion.div
            variants={Animate3}
            className={`Landing-Info p-4 font-Mont1  mx-auto  mt-10
            sm:text-xl
            text-lg
            sm:w-3/5
            w-11/12
            sm:text-center
            `}
          >
            Revolutionize vehicle maintenance with our online platform. Find
            nearby mechanics and book services effortlessly. Discover
            convenience and peace of mind for all your auto care needs
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LandingPage;
