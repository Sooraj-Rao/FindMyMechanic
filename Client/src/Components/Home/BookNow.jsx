import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../../Framer/Framer";
import { Animate2 } from "../../Framer/Framer";
import { Animate3 } from "../../Framer/Framer";
import { Animate4 } from "../../Framer/Framer";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

const BookNow = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <motion.div
      className={` h-fit text-center pb-20
      ${Dark ? "Dark2" : "Light"}
      `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.div
        className="  font-Poppins2 pt-16
        lg:text-[3vw]
        sm:text-[4.2vw]
        text-[6vw]
      "
        variants={Animate2}
      >
        <span className=" hidden lg:block">
          What Are You Waiting For, Book Your Service Today !
        </span>
        <span className=" block lg:hidden">
          Don't delay any further, Book Your Service Today !
        </span>
      </motion.div>
      <Link to={"/bookService"}>
        <motion.button
          variants={Animate2}
          className=" mt-16 text-sm sm:text-lg font-Poppins1 px-4 py-3 text-white "
        >
          Book Service
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default BookNow;
