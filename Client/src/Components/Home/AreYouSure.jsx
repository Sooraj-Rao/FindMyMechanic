import React, { useContext } from "react";
import { Mycontext } from "../Context";

const AreYouSure = ({ setlogged, setlogShow, SideBarLog, setSideBarLog }) => {
  const Yes = () => {
    localStorage.setItem("user", "");
    setlogged(false);
    setlogShow(false);
    setSideBarLog(!SideBarLog);
  };

  const No = () => {
    setlogShow(false);
    SideBarLog && setSideBarLog(!SideBarLog);
  };

  window.scrollTo(0, 0);
  return (
    <div
      className=" top-1/3  fixed h-40 border bg-slate-900 text-white AreYou rounded-xl z-50
        xl:left-1/3
        sm:left-1/4
        left-7
        xl:w-1/3
        sm:w-1/2
        w-10/12
    "
    >
      <h1
        className=" text-center font-Poppins2 pt-7
      sm:text-3xl
      text-2xl 
      "
      >
        Are You Sure
      </h1>
      <div className=" flex justify-center  text-xl gap-4 mt-7">
        <button className=" w-1/3 h-10" onClick={Yes}>
          Yes
        </button>
        <button className=" w-1/3 h-10 " onClick={No}>
          No
        </button>
      </div>
    </div>
  );
};

export default AreYouSure;
