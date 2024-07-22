import React, { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormShow } from "../Redux/FormSlice";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";
import { Mycontext } from "./Context";
import ScrollTo from "./ScrollTo";
import toast from "react-hot-toast";

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
    if (input.messageTitle == '' || input.message == '') return toast.error('All fields mandatory')
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
      toast.error("Error Sending Message");
    }
  };

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex justify-center">
      <div
        className={` z-30 fixed h-fit py-10 mt-28  rounded-3xl font-Poppins1
      xl:w-1/3
      md:w-1/2
      sm:w-4/6
      w-11/12
${Dark ? "Dark3 border border-slate-800" : " bg-gray-200"}
      `}
      >
        <span
          className=" absolute right-1 top-1  cursor-pointer rounded-full  text-white text-xl font-semibold bg-red-500 px-3 py-1  "
          onClick={() => dispatch(FormShow())}
        >
          X
        </span>
        <h1 className=" text-3xl text-center font-Poppins1 pt-4">
          Send Message
        </h1>
        <div className=" flex flex-col items-center justify-center  text-xl gap-4 mt-7">
          <div>
            <span className=""> To -  </span>
            <span
              className={` 
            ${Dark ? "text-green-300" : "text-blue-950"}
            `}
            >
              {msg.shopName}
            </span>
          </div>
          <div className=" w-full sm:px-10 px-4">
            <input
              className={`  h-10
              w-full
              ${Dark ? "bg-gray-200" : ""}
              `}
              placeholder="Add Title"
              type="text"
              name="messageTitle"
              onChange={handleChange}
              value={input.messageTitle}
            />
            <textarea
              placeholder="Add your Message"
              onChange={handleChange}
              rows="4"
              className={`w-full mt-3 resize-none   ${Dark ? "bg-gray-200" : ""}`}
              name="message"
              value={input.message}
            ></textarea>
          </div>
          <button className=" w-1/3 h-10 text-white " onClick={Send}>
            {loader ? <PulseLoader color="white" size={10} /> : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
