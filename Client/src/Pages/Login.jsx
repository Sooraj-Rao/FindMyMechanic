import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "../Components/Context";
import { data } from "../Texts/Texts";
import ScrollTo from "../Components/ScrollTo";
import toast from "react-hot-toast";
import Suggest from "../Components/Suggest";
import { LoginData } from "../Texts/TestData";

const Login = ({ logged, setlogged }) => {
  const [FillDummy, setFillDummy] = useState(false)
  const navigate = useNavigate();
  const [loader, setloader] = useState(false);
  const [input, setinput] = useState({
    password: "",
    email: "",
  });


  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const context = useContext(Mycontext);
  const { Dark, setDark, Server, Dummyshow, setDummyshow } = context;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setloader(true);
      const res = await axios.post(`${Server}/login`, input);
      if (res.data.message !== "Login Succesfully") {
        setloader(false);
        return toast.error(res.data.message);
      } else {
        localStorage.setItem("user", res.data.id);
        setloader(false);
        setinput({ password: "", email: "" });
        window.location.href = "/";
      }
    } catch (error) {
      setloader(false);
      toast.error("Login Failed");
    }
  };


  useEffect(() => {
    if (input.email != LoginData.email || input.password != LoginData.password) {
      setTimeout(() => {
        !Dummyshow && setDummyshow(!Dummyshow)
      }, 1000);
    }

    if (FillDummy) {
      setinput({ email: LoginData.email, password: LoginData.password })
      setFillDummy(!FillDummy)
    }
  }, [FillDummy])

  return (
    <div className=" py-32 sm:mt-20 mt-10 Login-Bg ">
      <ScrollTo />
      {
        Dummyshow &&
        <div className=" flex justify-center">
          <Suggest from='login' FillDummy={FillDummy} setFillDummy={setFillDummy} />
        </div>
      }
      <motion.form
        onSubmit={handleSubmit}
        className={`SingIn-shadow  h-fit   text-lg rounded-3xl mx-auto font-Mont
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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ staggerChildren: 0.1 }}

      >
        <motion.h1 variants={Animate4} className=" text-center text-2xl pt-6">Login</motion.h1>
        <motion.div
          className="SignIn  flex flex-col mx-auto  px-5 py-7
       sm:w-11/12
       w-full
       "
          variants={Animate4}
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
          <button disabled={loader} className={` h-10 mt-4 font-Poppins text-lg text-white
          ${loader && 'cursor-not-allowed'}
          `}>
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
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Login;
