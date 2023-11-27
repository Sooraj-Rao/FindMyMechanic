import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";
import { useNavigate, useParams } from "react-router-dom";
import ScrollTo from "../Components/ScrollTo";

const YetTo = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  const navigate = useNavigate();
  const param = useParams();
  const name = param.name;

  return (
    <>
      <ScrollTo />
      <div
        className={` w-full py-32 text-center  font-Poppins1 px-2
    ${Dark ? "Dark1" : "Light1"}
    `}
      >
        <h1 className=" md:text-5xl text-2xl  pt-32 pb-20">
          The Page
          <span className={`${Dark ? " text-teal-400" : "text-blue-700"} mx-2`}>
            {name}
          </span>
          is in Building stage...
        </h1>
        <button
          onClick={() => navigate("/")}
          className="md:px-6 md:py-3 px-4 py-2 md:text-xl text-lg text-white"
        >
          Go Home
        </button>
      </div>
    </>
  );
};

export default YetTo;
