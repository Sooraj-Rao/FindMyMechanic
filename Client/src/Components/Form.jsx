import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormShow } from "../Redux/FormSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "./Context";
import ScrollTo from "./ScrollTo";

const Form = ({ msg }) => {
  const [input, setinput] = useState({
    messageTitle: "",
    message: "",
  });
  const [loader, setloader] = useState(false);

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;

  const dispatch = useDispatch();
  const IsForm = useSelector((state) => state.showForm);

  const Send = async () => {
    const data = [msg, input];
    try {
      setloader(true);
      const res = await axios.post(`${Server}/shopMsg`, data);
      setloader(false);
      dispatch(FormShow());
      if (res.data.message == "Message Sent") {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      setloader(false);
      console.log(error);
      toast.error("Error Sending Message");
    }
  };

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex justify-center">
      <div
        className={` z-30 absolute h-fit py-10 mt-28  rounded-xl font-Poppins1
      xl:w-1/3
      md:w-1/2
      sm:w-4/6
      w-11/12
${Dark ? "Dark3" : "Light5"}
      `}
      >
        <span
          className=" absolute right-1 top-1 rounded-tr-lg cursor-pointer rounded-md  text-white text-xl font-bold bg-red-400 px-4 py-2 "
          onClick={() => dispatch(FormShow())}
        >
          X
        </span>
        <h1 className=" text-3xl text-center font-Poppins2 pt-4">
          Send Message
        </h1>
        <div className=" flex flex-col items-center justify-center  text-xl gap-4 mt-7">
          <div>
            <span className=" mr-4">To - </span>{" "}
            <span
              className={` 
            ${Dark ? "text-green-300" : "text-blue-950"}
            `}
            >
              {msg.shopName}
            </span>
          </div>
          <div>
            <input
              className="  h-10
              sm:w-[17rem]
              w-[16rem]
              "
              placeholder="Add Title"
              type="text"
              name="messageTitle"
              onChange={handleChange}
              value={input.messageTitle}
            />
          </div>
          <textarea
            placeholder="Add your Message"
            onChange={handleChange}
            className="sm:w-[17rem]
            w-[16rem]"
            rows="4"
            name="message"
            value={input.message}
          ></textarea>
          <button className=" w-1/3 h-10 text-white " onClick={Send}>
            {loader ? <PulseLoader color="white" size={10} /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
