import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Animate4 } from "../Framer/Framer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PulseLoader from "react-spinners/PulseLoader";
import { useDispatch, useSelector } from "react-redux";
import { FormShow } from "../Redux/FormSlice";
import { Mycontext } from "../Components/Context";
import AniServiceDetails from "../LoadingAnimate/AniServiceDetails";
import { useNavigate } from "react-router-dom";
import ScrollTo from "../Components/ScrollTo";

const ServiceDetails = ({
  Message,
  Okcancel,
  setOkcancel,
  logShow,
  setlogShow,
}) => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState({
    load1: true,
    load2: false,
  });
  const navigate = useNavigate();

  const context = useContext(Mycontext);
  const { Dark, setDark, Server } = context;
  const [id, setid] = useState(null);

  const dispatch = useDispatch();
  const IsForm = useSelector((state) => state.showForm);
  const userId = localStorage.getItem("user");

  const fetchService = async () => {
    try {
      const res = await axios.get(`${Server}/serviceDetails/${userId}`);
      setloader({ ...loader, load1: false });
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const showCancel = (id) => {
    setid(id);
    setOkcancel({ ...Okcancel, one: true });
  };

  const cancel = async (id) => {
    if (Okcancel.two) {
      try {
        setloader({ ...loader, load2: true });
        const res = await axios.post(`${Server}/serviceDetails/cancel/${id}`);
        setid(null);
        toast.success(res.data.message);
        setloader({ ...loader, load2: false });
      } catch (error) {
        setloader({ ...loader, load2: false });
        setid(null);
        console.log(error);
        toast.error(res.data.message);
      }
    }
  };

  const SendMessage = (item) => {
    Message(item);
    dispatch(FormShow());
  };

  useEffect(() => {
    !loader.load2 && fetchService();
    console.log("Redner");
  }, [loader.load2]);

  useEffect(() => {
    id !== null && cancel(id);
  }, [Okcancel.two]);
  return (
    <>
      <ScrollTo />
      <div className={`${Dark ? " bg-slate-900 text-white" : "Light4"}`}>
        <motion.div
          className=" h-fit pb-32 sm:mt-20 mt-10"
          initial={"Offscreen"}
          whileInView={"onScreen"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <h1 className=" text-center text-3xl pt-10 font-Poppins1">
            Service Details
          </h1>
          {loader.load1 ? (
            <>
              <AniServiceDetails />
            </>
          ) : data.length > 0 ? (
            data.map((item, i) => {
              i += 1;
              return (
                <div
                  className={`  bg-slate-900  rounded-xl h-fit  mx-auto mt-10
            xl:w-4/5
            sm:w-2/3
            w-11/12
            xl:py-10
            py-3
            ${Dark ? "Dark3" : "Light2"}
            ${
              !Dark
                ? "        shadow-[0rem_0rem_2rem_-4px] "
                : "        shadow-[0rem_0rem_2rem_-4px] "
            }
            ${!Dark ? "shadow-blue-900" : " shadow-gray-700"}
            `}
                  key={i}
                >
                  <div>
                    <div
                      className={` flex justify-around
                 xl:flex-row
                flex-col
                xl:text-lg
                sm:text-xl
                text-lg
               font-Poppins1
                xl:gap-0
                gap-5
                sm:items-center
                sm:ml-0
                pl-5
                ${!Dark ? " text-black" : " text-white"}
                `}
                    >
                      <div>
                        <span>S.No : </span>
                        <span>{i}</span>
                      </div>
                      <div>
                        <span>Shop : </span>
                        <span>{item.shopName}</span>
                      </div>
                      <div>
                        <span>Service : </span>
                        <span>{item.serviceName}</span>
                      </div>
                      <div>
                        <span>Cost : </span>
                        <span>{item.serviceCost}</span>
                      </div>
                      <div className=" text-white">
                        {item.status !== "Request Approved" && (
                          <button
                            className="px-3 py-1 mr-2"
                            onClick={() => showCancel(item._id)}
                            disabled={
                              item.status == "Request Canceled" ||
                              item.status == "Request Approved"
                            }
                          >
                            {loader.load2 && item._id == id && (
                              <PulseLoader color="white" size={10} />
                            )}
                            {item.status == "Request Canceled"
                              ? "Canceled"
                              : "Cancel"}
                          </button>
                        )}

                        <button
                          className="px-2 py-1"
                          onClick={() => SendMessage(item)}
                        >
                          Message
                        </button>
                      </div>
                      <div>
                        <span>
                          {item.status == "Request Canceled" ? (
                            <span className=" mr-2 text-red-400">
                              <i className="fa-sharp fa-solid fa-ban"></i>
                            </span>
                          ) : item.status == "Request Approved" ? (
                            <span className=" mr-2 text-green-400">
                              <i className="fa-solid fa-thumbs-up"></i>
                            </span>
                          ) : (
                            <span className=" mr-2  ">
                              <i className="fa-solid fa-clock"></i>
                            </span>
                          )}
                        </span>
                        <span
                          className=" font-Mont2"
                          style={{
                            color:
                              item.status == "Request Canceled"
                                ? "red"
                                : item.status == "Request Approved" && "green",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              className={`
          ${Dark ? "Dark3" : "Light4"}
          m-20 p-6
          ${
            !Dark
              ? "        shadow-[0rem_0rem_2rem_-4px] "
              : "        shadow-[0rem_0rem_2rem_-4px] "
          }
          ${!Dark ? "shadow-blue-900" : " shadow-gray-700"}
          text-center 
       rounded-xl
          `}
            >
              <h1
                className={`p-10  
            ${Dark ? "Dark4" : "Light"}
            text-2xl
            font-Mont1
            rounded-xl
            `}
              >
                No Services booked{" "}
              </h1>
              <button
                onClick={() => navigate("/bookService")}
                className=" mt-4 px-5 py-2 text-white"
              >
                Book now
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ServiceDetails;
