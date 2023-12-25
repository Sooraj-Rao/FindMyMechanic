import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "../Components/Context";
import { data } from "../Texts/Texts.jsx";
import ScrollTo from "../Components/ScrollTo";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [input, setinput] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const { Terms } = data;
  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;



  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.phone.length != 10) return toast.error('Enter valid Phone number')
    const phone = Number(input.phone);
    try {
      setloader(true);
      const res = await axios.post(`${Server}/signin`, {
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
    }
  };

  return (
    <div className="Login-Bg py-20 sm:mt-20 mt-10 ">
      <ScrollTo />
      <motion.form
        onSubmit={handleSubmit}
        className={`SingIn-shadow h-fit text-lg rounded-3xl  mx-auto font-Mont
      2xl:w-1/3
      xl:w-4/12
      lg:w-1/2
      md:w-1/2
      sm:w-4/6
      w-5/6
      font-Poppins1
      ${Dark ? "Dark2 border border-slate-900" : "Light1"}
      `}
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}

      >
        <motion.h1 variants={Animate4} className=" text-center text-2xl pt-6">Sign Up</motion.h1>
        <motion.div
          variants={Animate4}
          className="SignIn  flex flex-col mx-auto  py-7 px-5
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
                type="text"
                maxLength={10}
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
              <Link to={'/terms'}>
                <span
                  className={` underline  cursor-pointer
              ${Dark ? " text-blue-400 " : "text-blue-900 "}
              `}
                >
                  {Terms}
                </span>
              </Link>
            </h1>
          </div>
          <button disabled={loader} className={` h-10 mt-4 font-Poppins text-lg text-white
             ${loader && 'cursor-not-allowed'}
          `}>
            {loader ? <PulseLoader color="white" size={10} /> : "Submit"}
          </button>
          <h2 className=" pt-6 text-center">
            Already have account ?{" "}
            <span
              className={`
           text-blue-500
           ${Dark ? " text-blue-400 " : "text-blue-900  "}
          `}
            >
              {" "}
              <Link to={"/login"}>Login</Link>
            </span>{" "}
          </h2>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default SignIn;
