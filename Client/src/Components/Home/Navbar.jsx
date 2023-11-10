import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Mycontext } from "../Context";

const Navbar = ({
  logged,
  setlogged,
  setlogShow,
  SideBar,
  setSideBar,
  SideBarLog,
  setSideBarLog,
}) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const showLog = () => {
    setlogShow(true);
  };
  SideBarLog && showLog();

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && setlogged(true);
  }, [logged]);

  return (
    <div className=" fixed top-0 w-full z-50 backdrop-blur-md">
      <div
        className={`Navbar  flex justify-between items-center
      xl:px-10
      lg:px-5
      sm:px-10
      px-3
      sm:h-20
      h-14
    ${Dark ? "Dark1" : "Light6"}
      `}
      >
        <Link to={"/"}>
          <h2
            className={` italic font-Poppins3 
          sm:text-4xl
          text-[6vw]
        ${Dark ? "Logo" : "Logo2"}
          `}
          >
            FIND MY MECHANIC
          </h2>
        </Link>
        <div className="lg:hidden flex items-center">
          <h4
            className="  w-6 cursor-pointer
            sm:mr-6
            mr-5
            "
            onClick={() => setDark(!Dark)}
          >
            {Dark ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </h4>
          {!SideBar ? (
            <span
              className=" text-2xl text-gray-600 cursor-pointer w-5"
              onClick={() => setSideBar(!SideBar)}
            >
              <i className="fa-solid fa-bars"></i>
            </span>
          ) : (
            <span
              className=" text-2xl text-gray-600 cursor-pointer w-5 "
              onClick={() => setSideBar(!SideBar)}
            >
              <i className="fa-solid fa-x"></i>
            </span>
          )}
        </div>
        <div
          className={`font-Mont1  text-lg justify-between items-center
          ${!logged && "xl:w-5/12"}
          ${!logged && "lg:w-1/2"}
          lg:flex
          hidden
          ${logged && "xl:w-6/12"}
          ${logged && "lg:w-7/12"}
        `}
        >
          <Link to={"/"}>
            <h1>Home</h1>
          </Link>
          <Link to={"/bookService"}>
            <h1>Book Service</h1>
          </Link>

          {logged && (
            <div className="Dropdown-h1 relative ">
              <h1 className=" ManageNavbar">
                <span className=" mr-1">Manage</span>{" "}
                <i className="fa-solid fa-caret-down"></i>
              </h1>
              <ul
                className={`Dropdown absolute p-4 opacity-0 rounded-lg my-6 -mx-12 w-48 h-fit border 
              ${Dark ? "Dark1" : "Light6"}
              `}
              >
                <Link to={"/manageProfile"}>
                  <li>Profile</li>
                </Link>
                <Link to={"/serviceDetails"}>
                  <li>Service Details</li>
                </Link>
                <Link to={"/viewBill"}>
                  <li> Bills</li>
                </Link>
                <Link to={"/notification"}>
                  <li>Notification</li>
                </Link>
              </ul>
            </div>
          )}

          <Link to={"/contact"}>
            <h1>Contact</h1>
          </Link>
          {logged ? (
            <h1 onClick={showLog}>Logout</h1>
          ) : (
            <Link to={"/login"}>
              <button className=" bg-blue-500 text-white px-8 py-2 rounded-md font-Poppins1 ">
                Sign In
              </button>
            </Link>
          )}
          <h4 className="  w-6 cursor-pointer" onClick={() => setDark(!Dark)}>
            {Dark ? (
              <i className="fa-solid fa-moon"></i>
            ) : (
              <i className="fa-solid fa-sun"></i>
            )}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

export const SideNavbar = ({
  logged,
  setlogged,
  setlogShow,
  SideBar,
  setSideBar,
  SideBarLog,
  setSideBarLog,
}) => {
  return (
    <div
      className={`SideNavbar  h-screen z-50 right-0 sm:top-20 top-14
      lg:hidden fixed
      overflow-hidden
      whitespace-nowrap
      duration-500
    text-white
    ${SideBar ? "md:w-5/12" : "w-0"}
    ${SideBar && "sm:w-1/2"}
    ${SideBar && "w-9/12"}
    `}
    >
      <div
        className=" flex flex-col gap-5  py-5 h-full items-center text-lg font-Poppins2

      "
      >
        <Link to={"/"}>
          <h1 onClick={() => setSideBar(!SideBar)}>Home</h1>
        </Link>
        <Link to={"/bookService"} onClick={() => setSideBar(!SideBar)}>
          <h1>Book Service</h1>
        </Link>

        {logged && (
          <div className="relative ManageSidebar -mb-3">
            <h1 className=" h1">
              <span className=" mr-2">Manage </span>
              <i className="fa-solid fa-caret-down"></i>
            </h1>
            <ul className="SidebarShow  flex flex-col gap-3 mt-3 h-0  duration-300  overflow-hidden">
              <Link to={"/manageProfile"}>
                <li onClick={() => setSideBar(!SideBar)}>Profile</li>
              </Link>
              <Link to={"/serviceDetails"}>
                <li onClick={() => setSideBar(!SideBar)}>Service Details</li>
              </Link>
              <Link to={"/viewBill"}>
                <li onClick={() => setSideBar(!SideBar)}> Bills</li>
              </Link>
              <Link to={"/notification"}>
                <li onClick={() => setSideBar(!SideBar)}>Notification</li>
              </Link>
            </ul>
          </div>
        )}

        <Link to={"/contact"}>
          <h1 onClick={() => setSideBar(!SideBar)}>Contact</h1>
        </Link>
        {logged ? (
          <h1
            onClick={() => {
              setSideBarLog(!SideBarLog);
              setSideBar(!SideBar);
            }}
            className=" cursor-pointer"
          >
            Logout
          </h1>
        ) : (
          <Link to={"/login"}>
            <button
              className=" bg-blue-500 px-8 py-2 rounded-md font-Poppins1 "
              onClick={() => setSideBar(!SideBar)}
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
