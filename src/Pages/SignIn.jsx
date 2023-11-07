import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import {Mycontext} from '../Components/Context'

const SignIn = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [input, setinput] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = Number(input.phone);
    try {
      setloader(true);
      const res = await axios.post("https://findmymechanic.onrender.com/signin", {
        ...input,
        phone,
      });

      if (res.data.message !== "Successfully Registered") {
        setloader(false);
        return toast.info(res.data.message);
      } else {
        toast.success(res.data.message);
        setloader(false);
        setinput({ name: "", password: "", email: "", phone: "" });

        setTimeout(() => {
          navigate("/login");
        }, 4000);
      }
    } catch (error) {
      setloader(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className={`SingIn-shadow h-fit my-32 text-lg rounded-3xl  mx-auto font-Mont
      2xl:w-1/3
      xl:w-5/12
      lg:w-1/2
      md:w-1/2
      sm:w-4/6
      w-5/6
      font-Poppins1
      ${Dark?'Dark1':'Light1'}
      `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
    >
      <h1 className=" text-center text-2xl pt-6">Sign Up</h1>
      <div
        className="SignIn  flex flex-col mx-auto  py-7 px-10
      sm:w-11/12
      w-full
      "
      >
        <div className="lg:flex gap-x-7 mb-6">
          <div>
            <label>Name</label>
            <br />
            <input
              required
              value={input.name}
              onChange={handleChange}
              name="name"
              className=" capitalize"
              type="text"
            />
            <br />
          </div>
          <div className=" mt-4 lg:mt-0">
            <label>Phone</label>
            <br />
            <input
              required
              name="phone"
              value={input.phone}
              onChange={handleChange}
              type="number"
            />
          </div>
        </div>
        <label>Email</label>
        <input
          required
          name="email"
          value={input.email}
          onChange={handleChange}
          type="email"
        />
        <br />
        <label>Password</label>
        <input
          required
          name="password"
          value={input.password}
          onChange={handleChange}
          type="text"
        />
        <br />
        <div className=" flex w-full">
          <input className="SignIn-checkBox" type="checkbox" required />
          <h1 className=" ml-2">
            I Agree{" "}
            <a href="www.google.com">
              <span className={` underline 
              ${Dark?' text-blue-400 ':'text-blue-900 ' }
              `}>
                Terms & Conditions
              </span>
            </a>{" "}
          </h1>
        </div>
        <button className=" h-10 mt-4 font-Poppins text-lg text-white">
          {loader ? <PulseLoader color="red" size={10} /> : "Submit"}
        </button>
        <h2 className=" pt-6 text-center">
          Already have account ?{" "}
          <span className={`
           text-blue-500
           ${Dark?' text-blue-400 ':'text-blue-900  ' }
          `}
           >
            {" "}
            <Link to={"/login"}>Login</Link>
          </span>{" "}
        </h2>
      </div>
      <ToastContainer
        position="top-right"
        className=" sm:mt-0 mt-32"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </motion.form>
  );
};

export default SignIn;
