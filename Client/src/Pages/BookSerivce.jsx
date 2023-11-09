import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mycontext } from "../Components/Context";

const BookSerivce = ({ logged }) => {
  const [pincode, setpincode] = useState("");

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const isLogged = () => {
    !logged && toast.info("Please login to Continue");
    setTimeout(() => {
      !logged && navigate("/login");
    }, 3000);
    localStorage.setItem("pincode", pincode);
    logged && navigate("/shop");
  };



  return (
    <motion.div
      className={` h-fit py-32 sm:mt-20 mt-10   flex flex-col justify-center gap-10 items-center
      ${Dark ? "Dark2" : "Light1"}
      `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <motion.h1
        className="  font-Poppins2
      lg:text-6xl
       sm:text-5xl
       text-4xl
       text-center"
       variants={Animate4}
      >
        Enter your pincode below{" "}
      </motion.h1>
      <motion.h2 className=" font-Poppins1 text-xl   text-center"     variants={Animate4}>
        We will find Mechanic Shop in your Pincode
      </motion.h2>
      <motion.input
        type="text"
        className=" text-xl font-Poppins2 h-10 w-60 text-center"
        maxLength={6}
        value={pincode}
        onChange={(e) => setpincode(e.target.value)}
        variants={Animate4}
      />
      <motion.button  className=" h-12 w-60 text-xl font-Mont1 text-white" onClick={isLogged}     variants={Animate4}>
        Find
      </motion.button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </motion.div>
  );
};

export default BookSerivce;
