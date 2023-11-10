import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mycontext } from "../Components/Context";

const BookSerivce = ({ logged }) => {
  const [pincode, setpincode] = useState("");
  const [shake, setshake] = useState(false);
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const navigate = useNavigate();
  window.scrollTo(0, 0);

  const isLogged = () => {
    if (!logged) {
      !logged && toast.info("Please login to Continue");
      setTimeout(() => {
        !logged && navigate("/login");
      }, 3000);
    } else {
      if (pincode.length < 6) {
        return toast.info("Enter valid pincode");
      }
      localStorage.setItem("pincode", pincode);
      logged && navigate("/shop");
    }
  };

  const handle = (e) => {
    let num = Number(e.target.value);
    if (isNaN(num)) {
      return setshake(true);
    }
    setpincode(e.target.value);
  };

  if (shake) {
    setTimeout(() => {
      setshake(false);
    }, 1000);
  }

  return (
    <motion.div
      className={` h-fit py-32 sm:mt-20 mt-10 px-2   flex flex-col justify-center gap-10 items-center
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
       text-3xl
       text-center"
        variants={Animate4}
      >
        Enter your pincode below{" "}
      </motion.h1>
      <motion.h2
        className=" font-Poppins1 text-xl   text-center"
        variants={Animate4}
      >
        We will find Mechanic Shop in your Pincode
      </motion.h2>
      <motion.input
        type="text"
        placeholder="6 digit pincode"
        className={`
        text-xl
       font-Poppins1
        h-10 w-60 text-center
        border border-white
        ${shake && "bookServiceTextbox"}
        `}
        maxLength={6}
        value={pincode}
        onChange={handle}
        variants={Animate4}
      />
      <motion.button
        className={`
        h-12 w-60 text-xl font-Mont1 text-white
        ${pincode.length < 6 && pincode.length > 0 && " brightness-75"}
        `}
        onClick={isLogged}
        variants={Animate4}
      >
        Find
      </motion.button>
    </motion.div>
  );
};

export default BookSerivce;
