import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Context";

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

  window.scrollTo(0, 0);

  return (
    <div className=" flex justify-center overflow-hidden">
      <div
        className={` absolute w-fit top-1/3  z-10 h-fit p-10  rounded-xl font-Poppins2
      ${Dark ? "Dark" : "Light"}
      ${!Dark ? "text-black" : "text-white"}
      `}
      >
        <h1
          onClick={close}
          className=" bg-red-400 text-2xl px-4 absolute top-0 right-0 font-bold  rounded cursor-pointer"
        >
          X
        </h1>
        <h1 className=" text-xl text-center 
        sm:text-3xl
        ">{msg}</h1>
        <div className=" flex justify-center  text-xl mt-7">
          <button className=" px-4 py-3 text-white" onClick={book}>
            View Service Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooked;
