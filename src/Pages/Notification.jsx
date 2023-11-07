import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate1 } from "../Framer/Framer";
import { Animate2 } from "../Framer/Framer";
import { Animate3 } from "../Framer/Framer";
import { Animate4 } from "../Framer/Framer";
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import { Mycontext } from "../Components/Context";

const Notification = () => {
  const [message, setmessage] = useState([]);
  const [code, setcode] = useState();
  const [loader, setloader] = useState(true);
  const [toggle, settoggle] = useState(true);

  const context = useContext(Mycontext);
  const { Dark, setDark } = context;

  useEffect(() => {
    const fetch = async () => {
      try {
        if (toggle) {
          const res = await axios.get(
            "http://localhost:3001/notification/view"
          );
          setloader(false);
          setmessage(res.data.message);
          setcode(res.data.code);
        } else {
          const res = await axios.get(
            `http://localhost:3001/notification/sent/${userId}`
          );
          setloader(false);
          setmessage(res.data.message);
        }
      } catch (error) {
        console.log(error);
        setloader(false);
      }
    };
    fetch();
  }, [toggle]);

  return (
    <div
      className={`  ${
        Dark ? " bg-slate-900 text-white" : "Light4"
      } mt-20 pb-20 `}
    >
      <div className=" flex justify-end gap-2 pt-4 pr-5 items-center  ">
        <span className=" text-lg font-Poppins1 ">
          {toggle ? "View Sent Messages" : "View Notifications"}
        </span>
        <div
          className={` relative w-20 h-10 border-2 rounded-full flex cursor-pointer
          ${Dark ? " border-white" : "border-black"}
          `}
          style={{ justifyContent: toggle ? "start" : "end" }}
          onClick={() => settoggle(!toggle)}
        >
          <div
            className={` absolute w-8 h-8 rounded-full  m-[.15rem] 
          ${Dark ? " bg-white" : " bg-slate-600"}
          `}
          ></div>
        </div>
      </div>
      {toggle ? (
        <View loader={loader} message={message} code={code} toggle={toggle} />
      ) : (
        <Sent loader={loader} message={message} toggle={toggle} />
      )}
    </div>
  );
};

export default Notification;

export const View = ({ loader, message, code, toggle }) => {
  return (
    <Body
      loader={loader}
      message={message}
      code={code}
      title="Notifications"
      toggle={toggle}
    />
  );
};

export const Sent = ({ loader, message, toggle }) => {
  return (
    <Body
      loader={loader}
      message={message}
      title="Sent Message"
      toggle={toggle}
    />
  );
};

export const Body = ({ loader, message, code, title, toggle }) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;
  return (
    <motion.div
      className="h-fit "
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
    >
      <h1 className=" text-center text-3xl py-10 font-Poppins1">{title}</h1>
      {loader ? (
        <div className=" flex justify-center my-32">
          {" "}
          <PulseLoader color="white" size={10} />
        </div>
      ) : (
        <div
          className={` rounded-3xl  h-fit  mx-auto
        md:p-10
        md:w-1/2
        w-11/12
        ${Dark ? "Dark4" : "Light4"}
        ${
          !Dark
            ? "        shadow-[0rem_0rem_2rem_-4px] "
            : "        shadow-[0rem_0rem_2rem_-4px] "
        }
        ${!Dark ? "shadow-blue-900" : " shadow-gray-500"}
        `}
        >
          {message.map((item, i) => {
            return (
              <>
                <div
                  className={` w-full   p-4 mx-auto 
                  sm:my-4 
                  my-1
                  sm:rounded-lg
                  ${Dark ? "Dark2" : "Light"}
                  `}
                  key={i}
                >
                  <div className="">
                    <div
                      className={` text-xl mb-2 w-full font-Poppins1
                    ${Dark ? "text-green-300 " : "text-blue-950"}
                    `}
                    >
                      <span>
                        {toggle ? item.MessageTitle : item.messageTitle}
                      </span>
                      <span
                        className={`  ml-4 text-lg font-Poppins1  
                    ${Dark ? "text-teal-300" : " text-slate-800"}
                    `}
                      >
                        {" "}
                        3/2/2020{" "}
                      </span>
                    </div>
                  </div>
                  <h2>{toggle ? item.Message : item.message}</h2>
                </div>
              </>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
