import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";
import ScrollTo from "./ScrollTo";

const Bill = ({ msg, billOpen, setbillOpen }) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <div
      className={`absolute  rounded
    h-fit py-3
    z-20
    sm:translate-x-1/2 
    sm:w-1/2
    w-full
    sm:mt-3
mt-5
    font-Mont1
${Dark ? "Dark" : "Light5"}
    `}
    >
      <ScrollTo />
      <h1
        className=" text-white absolute right-0 top-0 text-2xl bg-red-700 px-4 cursor-pointer"
        onClick={() => setbillOpen(false)}
      >
        X
      </h1>
      <div className=" Navbar mt-10 ">
        <h2 className="text-4xl italic font-Poppins3  text-center">
          FIND MY MECHANIC
        </h2>
      </div>
      <h4 className=" text-center text-2xl font-Poppins1 mt-2  underline ">
        Invoice
      </h4>
      <div
        className=" flex  
        xl:flex-row
        flex-col
      xl:justify-between
     items-center
      mt-10 px-20"
      >
        <div className="text-xl">
          <h2
            className={`
          ${!Dark ? " text-teal-950" : " text-teal-500"} 
          
          `}
          >
            Custome Details
          </h2>
          <h1>
            <span>Name : </span>
            <span>{msg.userName}</span>
          </h1>
          <h1>
            <span>Email : </span>
            <span>{msg.userEmail}</span>
          </h1>
          <h1>
            <span>Phone : </span>
            <span>{msg.userPhone}</span>
          </h1>
        </div>

        <div className=" xl:mt-0 mt-5 text-xl">
          <h2
            className={`  
            ${!Dark ? " text-teal-950" : " text-teal-500"} 
          `}
          >
            Service Details
          </h2>
          <h1>
            <span> Shop : </span>
            <span>{msg.shopName}</span>
          </h1>
          <h1>
            <span>Service : </span>
            <span>{msg.serviceName}</span>
          </h1>
          <h1>
            <span>vehicle : </span>
            <span>{msg.vehicleType}</span>
          </h1>
        </div>
      </div>
      <hr className="mt-10" />
      <div
        className="  mt-10 text-center
      sm:px-20
      px-10
      "
      >
        <span className=" text-xl mr-4">Total Service Cost : </span>
        <h1 className=" block sm:hidden text-xl">Rs. {msg.serviceCost}</h1>
        <span className=" hidden sm:block text-xl">Rs. {msg.serviceCost}</span>
        <br />
        <br />
        <span className=" text-xl mr-4">Disocunt : </span>
        <span className=" text-xl">
          {msg.discount} {" %"}
        </span>
        <br />
        <br />
        <span className=" text-xl mr-4">Final Payable Cost : </span>
        <span className=" text-2xl">
          {" "}
          Rs.{" "}
          <span className=" text-gray-400 line-through text-xl">
            {msg.serviceCost}
          </span>
          <br />
          <h1
            className={` mt-5  font-bold
            ${!Dark ? " text-teal-950" : " text-teal-500"} 
          `}
          >
            Rs. {msg.total}
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Bill;
