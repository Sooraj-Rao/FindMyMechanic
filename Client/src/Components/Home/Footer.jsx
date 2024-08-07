import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../../Framer/Framer";
import { Animate2 } from "../../Framer/Framer";
import { Animate3 } from "../../Framer/Framer";
import { Animate4 } from "../../Framer/Framer";
import { Mycontext } from "../Context";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";
import { data } from "../../Texts/Texts";
import toast from "react-hot-toast";

const Footer = () => {
  const [load, setload] = useState(false);
  const [email, setemail] = useState("");
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;
  const [shake, setshake] = useState(false);

  if (shake) {
    setTimeout(() => {
      setshake(!shake)
    }, 3000);
  }

  const handle = (e) => {
    e.preventDefault();
    if (shake) return
    if (!email.includes('@') || !email.includes('.')) return setshake(!shake)
    if (email.length < 15) {
      return setshake(!shake);
    }
    setload(true);
    setTimeout(() => {
      setemail("");
      setload(false);
      toast.success("Email subscription successfull");
    }, 2000);
  };

  const { Terms, Bug, Feedback, FAQ } = data;

  return (
    <div className=" h-80">
      <motion.div
        className={`
        border-t pb-10 
        md:justify-evenly
        flex
        justify-evenly
        md:flex-row
        flex-col
        items-center
        text-center
        
        ${Dark ? "Dark2 border-slate-900" : "bg-white "}
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
          <div className=" text-lg flex justify-center gap-8   mx-auto w-full   h-3/4 pt-4">
            <h1 className="  ">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>

              </a>
            </h1>

            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <h1 className=" ">
                <i className="fa-brands fa-twitter"></i>
              </h1>
            </a>
            <a href="https://mail.google.com/" target="_blank" rel="noreferrer">
              <h1 className=" ">
                <i className="fa-regular fa-envelope"></i>
              </h1>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <h1 className="  mr-2">
                <i className="fa-brands fa-github"></i>
              </h1>
            </a>
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
            <Link to={"/terms"} className=" hover:underline">
              <h1>{Terms}</h1>
            </Link>
            <Link to={"/b/" + FAQ} className=" hover:underline">
              <h1>{FAQ}</h1>
            </Link>
            <Link to={"/b/" + Bug} className=" hover:underline">
              <h1>{Bug}</h1>
            </Link>
            <Link to={"/b/" + Feedback} className=" hover:underline">
              <h1>{Feedback}</h1>
            </Link>
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
            <form className=" w-3/4 mx-auto">
              <input
                placeholder="Add your E-mail"
                type="text"
                className={` h-10 mt-5 w-full `}
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />

              <label style={{ visibility: shake ? 'visible' : 'hidden' }} className={` text-red-600    text-sm`}>Enter valid email</label>

              <button onClick={handle} className=" w-full  h-10 text-white">
                {load ? (
                  <span className=" flex justify-center items-center">
                    <PulseLoader color="white" size={6} />
                  </span>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
      <div
        className={` h-1/6  text-center cursor-default pt-5 font-Poppins 
      ${Dark ? "Dark2" : "bg-white"}
      `}
      >
        <h1>Copyright @ FindMyMechanic</h1>
      </div>
    </div>
  );
};

export default Footer;
