import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Mycontext } from "../Components/Context";
import ScrollTo from "../Components/ScrollTo";


const BookSerivce = ({ logged }) => {
  const [Search, SetSearch] = useSearchParams();
  const location = useLocation();
  const context = useContext(Mycontext);
  const [pincode, setpincode] = useState("");
  const [shake, setshake] = useState(false);
  const { Dark, setDark } = context;

  const navigate = useNavigate();

  const isLogged = (e) => {
    e.preventDefault();
    if (!logged) {
      !logged && toast.info("Please login to Continue");
      setTimeout(() => {
        !logged && navigate("/login");
      }, 3000);
    } else {
      if (pincode.length == 0 || pincode.length<6) return setshake(!shake)

      logged && navigate(location.pathname + '/shop' + '?' + Search)
    }
  };

  const handle = (e) => {
    let num = Number(e.target.value);
    if (isNaN(num)) {
      return setshake(true);
    }
    setpincode(e.target.value);
    SetSearch({ p: e.target.value })
  };

  if (shake) {
    setTimeout(() => {
      setshake(false);
    }, 3000);
  }

  return (
    <motion.form
      className={` h-fit py-32 sm:mt-20 mt-10 px-2   flex flex-col justify-center gap-10 items-center
      ${Dark ? "Dark2" : "Light1"}
      `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
    >
      <ScrollTo />
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
      {
        shake &&
        <label className=" -mb-5 -mt-8 text-red-500" >Enter Valid Pincode</label>
      }
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
    </motion.form>
  );
};

export default BookSerivce;
