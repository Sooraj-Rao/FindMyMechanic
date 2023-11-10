import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getData } from "../Redux/FetchUserDetailSlice";
import { Mycontext } from "../Components/Context";
import AniProfile from "../LoadingAnimate/AniProfile";

const ManageProfile = () => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;
  const [load, setload] = useState(true);

  const dispatch = useDispatch();

  const UserDetails = useSelector((state) => state.userData);

  useEffect(() => {
    UserDetails.data !== null && setload(false);
  }, [UserDetails]);

  return (
    <div className={`${Dark ? "bg-slate-900 text-white" : "Light1"} py-10 `}>
      {load ? (
        <AniProfile />
      ) : (
        <div>
          <motion.div
            className={` h-fit   rounded-xl    mx-auto pt-10 px-10 pb-20 mt-20 flex justify-center gap-20  items-center
        xl:w-1/2
        lg:w-4/6
        w-11/12
        md:flex-row
        flex-col
        p-10
        font-Poppins1
     ${Dark ? "Dark3" : "Light2"}
     ${
       !Dark
         ? "        shadow-[0rem_0rem_2rem_-4px] "
         : "        shadow-[0rem_0rem_2rem_-4px] "
     }
    ${!Dark ? "shadow-blue-900" : " shadow-gray-700"}
        `}
            initial={"Offscreen"}
            whileInView={"onScreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.1 }}
            variants={Animate4}
          >
            <div
              className="  rounded-full overflow-hidden
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
              
              "
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
              {/* <button
            className="p-2 
          sm:w-5/6
          w-full
          text-white
          "
          >
            Change Password
          </button> */}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageProfile;
