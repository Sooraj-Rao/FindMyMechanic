import React, { useContext } from "react";
import { Mycontext } from "../Components/Context";

const Bill = ({ msg, billOpen, setbillOpen }) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  return (
    <div
      className={`fixed  rounded-3xl
    h-fit py-3 
    z-20
    md:translate-x-1/2 
    md:w-1/2
    w-full
    sm:mt-24
    mt-20
    font-Mont1
${Dark ? "Dark3 border border-slate-700" : "Light"}
    `}
    >
      <h1
        className=" text-white absolute right-2 top-2 rounded-full text-2xl bg-red-700 px-3 py-1 cursor-pointer"
        onClick={() => setbillOpen(false)}
      >
        X
      </h1>
      <div className=" Navbar mt-10 ">
        <h2 className="sm:text-4xl text-2xl italic font-Poppins3  text-center">
          FIND MY MECHANIC
        </h2>
      </div>
      <h4 className=" text-center sm:text-2xl text-xl font-Poppins1 mt-2  underline ">
        Invoice
      </h4>
      <div
        className=" flex  
        xl:flex-row
        flex-col
      xl:justify-between
     items-center
      mt-10 lg:px-10 "
      >
        <div className="sm:text-xl text-base">
          <h2
            className={` font-semibold
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

        <div className=" xl:mt-0 mt-3 sm:text-xl text-base">
          <h2
            className={`    font-semibold
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
      <hr className="mt-5 border border-slate-800 " />
      <div
        className="  mt-5 text-center
      sm:px-20
      px-10
      text-base
      "
      >
        <span className=" sm:text-xl mr-4">Total Service Cost : </span>
        <h1 className=" block sm:hidden ">Rs. {msg.serviceCost}</h1>
        <span className=" hidden sm:block text-xl">Rs. {msg.serviceCost}</span>
        <br />
        <span className=" sm:text-xl mr-4">Disocunt : </span>
        <span className=" sm:text-xl">
          {msg.discount} {" %"}
        </span>
        <br />
        <br />
        <span className=" sm:text-xl mr-4">Final Payable Cost : </span>
        <span className=" sm:text-2xl">
          {" "}
          Rs.{" "}
          <span className={` text-slate-600 line-through text-xl`}>
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
