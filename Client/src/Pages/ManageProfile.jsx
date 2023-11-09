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
  const [data, setdata] = useState();

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  const dispatch = useDispatch();

  const UserDetails = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(getData());
  }, []);
  console.log(UserDetails.data);
  
  return (
    <>
      {UserDetails.data.length == 0 ? (
        <AniProfile />
      ) : (
        <div className={`${Dark ? "Dark2" : "Light1"} py-10 `}>
          <motion.div
            className={` h-fit  shadow-[0rem_0rem_1rem_-2px] rounded-xl shadow-blue-900   mx-auto pt-10 px-10 pb-20 mt-20 flex justify-center gap-20  items-center
        xl:w-1/2
        lg:w-4/6
        w-11/12
        sm:flex-row
        flex-col
        p-10
        font-Poppins1
     ${Dark ? "Dark3" : "Light2"}
        `}
            initial={"Offscreen"}
            whileInView={"onScreen"}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ staggerChildren: 0.1 }}
            variants={Animate4}
          >
            <div
              className=" h-60 rounded-full overflow-hidden
         md:w-1/2
         w-full
      "
            >
              <img src="/public/img.jpg" className=" h-full w-full" />
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
    </>
  );
};

export default ManageProfile;
