import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../Components/Context";

const NotFound = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <div
      className={` text-center py-40  bg-white font-Poppins2
    ${Dark ? "text-white" : "text-black"}
    ${Dark?'Dark2':'Light'}
    `}
    >
      <h1 className=" text-4xl my-10 ">
        The Page you are looking for is Not Found
      </h1>
      <Link to={"/"}>
        <button className=" p-3 text-white ">Go to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
