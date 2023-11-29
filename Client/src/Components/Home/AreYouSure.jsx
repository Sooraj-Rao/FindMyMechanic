import React, { useContext } from "react";
import { Mycontext } from "../Context";
import { useNavigate } from "react-router-dom";
import ScrollTo from "../ScrollTo";

const AreYouSure = ({
  setlogged,
  setlogShow,
  SideBarLog,
  setSideBarLog,
  Okcancel,
  setOkcancel,
}) => {

  const context = useContext(Mycontext);
  const { Dark } = context;

  const navigate = useNavigate();
  const Yes = () => {
    if (Okcancel.one) {
      setOkcancel({ one: false, two: true });
    } else {
      localStorage.setItem("user", "");
      setlogged(false);
      setlogShow(false);
      window.location.href = "/";
      SideBarLog && setSideBarLog(!SideBarLog);
    }
  };

  const No = () => {
    if (Okcancel.one) {
      setOkcancel({ one: false, two: false });
    } else {
      setlogShow(false);
      SideBarLog && setSideBarLog(!SideBarLog);
    }
  };

  return (
    <div
      className={` top-1/3  fixed h-40 border   AreYou rounded-xl z-50
        xl:left-1/3
        sm:left-1/4
        left-7
        xl:w-1/3
        sm:w-1/2
        w-10/12
        ${!Dark?'bg-slate-200 text-black':'bg-slate-950 text-white'}
    `}
    >
      <h1
        className=" text-center font-Poppins2 pt-7
      sm:text-3xl
      text-2xl 
      "
      >
        Are You Sure
      </h1>
      <div className=" flex justify-center  text-xl gap-4 mt-7 text-white">
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
