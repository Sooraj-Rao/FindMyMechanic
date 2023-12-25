import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Context";
import ScrollTo from "../ScrollTo";

const ServiceBooked = ({ booked, setbooked, msg }) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const navigate = useNavigate();

  const book = () => {
    setbooked(false);
    navigate("/serviceDetails");
  };
  const close = () => {
    setbooked(false);
  };


  return (
    <div className=" flex justify-center overflow-hidden">
      <ScrollTo/>
      <div
        className={` fixed w-fit top-1/3 border border-slate-700  z-10 h-fit p-10  rounded-3xl font-Poppins2
      ${Dark ? "Dark3" : "Light"}
      ${!Dark ? "text-black" : "text-white"}
      `}
      >
        <h1
          onClick={close}
          className=" bg-red-500 hover:bg-red-600 text-2xl px-3 py-1 absolute top-1 right-1 text-white   rounded-full cursor-pointer"
        >
          X
        </h1>
        <h1 className=" text-xl text-center 
        sm:text-3xl
        ">{msg}</h1>
        <div className=" flex justify-center  text-xl mt-7">
          <button className=" px-4 py-2 text-white text-lg" onClick={book}>
            View Service Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooked;
