import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";
import { Mycontext } from "../Components/Context";
import AniNotification from "../LoadingAnimate/AniNotifification";
import ScrollTo from "../Components/ScrollTo";
import toast, { ToastBar } from "react-hot-toast";

const Notification = () => {
  const [message, setmessage] = useState([]);
  const [code, setcode] = useState();
  const [loader, setloader] = useState(true);
  const [toggle, settoggle] = useState(true);

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  const user = useSelector((state) => state.userData);
  const userId = user.data._id;
  useEffect(() => {
    const fetch = async () => {
      try {
        if (toggle) {
          const res = await axios.get(`${Server}/notification/view`);
          setloader(false);
          setmessage(res.data.message);
          setcode(res.data.code);
        } else {
          const res = await axios.get(
            `${Server}/notification/sent/${userId}`
          );
          setloader(false);
          setmessage(res.data.message);
        }
      } catch (error) {
        toast.error('Failed to Fetch Message')
        setloader(false);
      }
    };
    fetch();
  }, [toggle]);

  return (
    <div
      className={`  ${Dark ? " Dark2" : "Light4"
        } mt-10 pb-20 `}
    >
      <div
        className=" flex justify-end gap-2  pr-5 items-center  
      xl:pt-14
      sm:pt-20
      pt-10 
      z-50
       fixed right-0
      "
      >
        <span className=" text-lg font-Poppins1 ">
          {toggle ? "View Sent Messages" : "View Notifications"}
        </span>
        <div
          className={` relative  rounded-full flex cursor-pointer
          w-16 h-8 bg-white
          `}
          style={{ justifyContent: toggle ? "start" : "end" }}
          onClick={() => {
            settoggle(!toggle);
            setloader(true);
          }}
        >
          <div
            className={` absolute  rounded-full  m-[.25rem] 
            w-6 h-6
          ${Dark ? " bg-black" : " bg-slate-600"}
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
      title="Sent Messages"
      toggle={toggle}
    />
  );
};

export const Body = ({ loader, message, code, title, toggle }) => {
  const context = useContext(Mycontext);
  const { Dark, setDark } = context;
  return (
    <motion.div
      className={`h-fit 
      ${Dark ? 'Dark2' : 'Light4'}
      `}
      initial={"Offscreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.1 }}
      variants={Animate4}
    >
      <ScrollTo />
      <h1 className=" text-center text-2xl pb-10 pt-16 font-Poppins1">{title}</h1>
      <div
        className={` rounded-3xl  h-fit  mx-auto
        xl:w-1/2
        lg:w-2/3
        w-11/12
        `}
      >
        {!loader && message.length == 0 && (
          <div className=" ">
            <h1
              className={` text-center sm:text-xl py-10 font-Poppins1 rounded-xl
        ${Dark ? "Dark4" : "Light4"}
        `}
            >
              No messages found!
            </h1>
          </div>
        )}
        {loader ? (
          <AniNotification />
        ) : (
          message.map((item, i) => {
            return (
              <div key={i}>
                <div
                  className={` w-full   p-4 mx-auto 
                  sm:my-4 
                  my-4
                  rounded-xl
                  ${Dark ? " bg-gray-900" : "Light2"}
                  `}
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
                    </div>
                  </div>
                  <h2>{toggle ? item.Message : item.message}</h2>
                </div>
              </div>
            );
          })
        )}
      </div>
    </motion.div>
  );
};
