import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "../Components/Context";
import { data } from "../Texts/Texts";
import ScrollTo from "../Components/ScrollTo";

const Login = ({ logged, setlogged }) => {
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [input, setinput] = useState({
    password: "",
    email: "",
  });

  const { Forgot } = data;

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloader(true);
      const res = await axios.post(`${Server}/login`, input);
      if (res.data.message !== "Login Succesfully") {
        setloader(false);
        return toast.info(res.data.message);
      } else {
        toast.success(res.data.message);
        localStorage.setItem("user", res.data.id);
        setloader(false);
        setlogged(true);
        setinput({ password: "", email: "" });
        setTimeout(() => {
          window.location.href = "/";
        }, 4000);
      }
    } catch (error) {
      setloader(false);
      toast.error("Something went wrong");
      console.log(error);
    }
  };

  return (
    <div className=" py-32 sm:mt-20 mt-10 Login-Bg">
      <ScrollTo />
      <motion.form
        onSubmit={handleSubmit}
        className={`SingIn-shadow  h-fit   text-lg rounded-3xl mx-auto font-Mont
      2xl:w-1/3
      xl:w-5/12
      lg:w-1/2
      md:w-1/2
      sm:w-4/6
      w-5/6
      font-Poppins1
      ${Dark ? "Dark" : "Light1"}
      `}
        initial={"Offscreen"}
        whileInView={"onScreen"}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}
        variants={Animate4}
      >
        <h1 className=" text-center text-2xl pt-6">Login</h1>
        <div
          className="SignIn  flex flex-col mx-auto  px-10 py-7
       sm:w-11/12
       w-full
      "
        >
          <label>Email</label>
          <input
            required
            value={input.email}
            onChange={handleChange}
            name="email"
            type="email"
          />
          <br />
          <label>Password</label>
          <input
            required
            value={input.password}
            onChange={handleChange}
            name="password"
            type="text"
          />
          <br />
          <h1
            onClick={() => navigate("/building/" + Forgot)}
            className={` text-base  cursor-pointer
              ${Dark ? " text-blue-400 " : "text-blue-900 "}
          `}
          >
            {Forgot} ?
          </h1>
          <button className=" h-10 mt-4 font-Poppins text-lg text-white">
            {loader ? <PulseLoader color="white" size={10} /> : "Submit"}
          </button>
          <h2 className=" pt-7 text-center">
            Dont have account ?
            <span
              className={`
            ${Dark ? " text-blue-400 " : "text-blue-900 "}
            `}
            >
              <Link to={"/signUp"}> Sign Up</Link>
            </span>
          </h2>
        </div>
      </motion.form>
    </div>
  );
};

export default Login;
