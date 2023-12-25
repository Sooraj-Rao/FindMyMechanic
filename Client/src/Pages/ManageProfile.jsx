import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate1, Animate3, Animate4 } from "../Framer/Framer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getData } from "../Redux/FetchUserDetailSlice";
import { Mycontext } from "../Components/Context";
import ScrollTo from '../Components/ScrollTo'
import AniProfile from "../LoadingAnimate/AniProfile";

const ManageProfile = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;;


  const UserDetails = useSelector((state) => state.userData);
  let load = UserDetails.data.length == 0;

  return (
    <div className={`${Dark ? "Dark2" : "Light1"} py-10 `}>
      <ScrollTo />
      <div>
        {
          load ?
            <AniProfile /> :
            <div
              className={` h-fit  rounded-[2rem]    mx-auto pt-10 px-10 pb-20 mt-20 flex justify-center gap-20  items-center
    xl:w-1/2
    lg:w-4/6
    w-11/12
    md:flex-row
    flex-col
    p-10
    font-Poppins1
    shadow-[0rem_0rem_1rem_-4px]
 ${Dark ? "bg-slate-950 text-white" : "Light2"}
${!Dark ? "shadow-blue-900" : " shadow-gray-700"}
    `}

            >
              <div
                className={`  rounded-full overflow-hidden
          xl:w-[20vw]
          xl:h-[20vw]
         lg:w-[22vw]
         lg:h-[22vw]
         md:w-[28vw]
         md:h-[28vw]
         sm:w-[40vw]
         sm:h-[40vw]
          w-[70vw]
          h-[70vw]
          `}
              >
                <img src="/img.jpg" className=" h-full w-full" />
              </div>
              <div
                className=" h-60  text-xl flex flex-col justify-evenly
   md:w-1/2
   w-full
  "
              >
                <div className=" flex">
                  <h1>Name :{UserDetails.data?.name} </h1>
                </div>
                <div className=" flex ">
                  <h1>Phone : {UserDetails.data?.phone}</h1>
                </div>
                <div className=" flex">
                  <h1>Email : {UserDetails.data?.email}</h1>
                </div>
              </div>
            </div>
        }
      </div>

    </div>
  );
};

export default ManageProfile;
