import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar, { SideNavbar } from "./Components/Home/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Home/Footer";
import BookSerivce from "./Pages/BookSerivce";
import Contact from "./Pages/Contact";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import NotFound from "./Pages/404";
import Shop from "./Pages/Shop";
import Service from "./Pages/Service";
import ManageProfile from "./Pages/ManageProfile";
import ServiceDetails from "./Pages/ServiceDetails";
import ViewBill from "./Pages/ViewBill";
import Notification from "./Pages/Notification";
import AreYouSure from "./Components/Home/AreYouSure";
import ChooseVehicle from "./Pages/ChooseVehicle";
import ServiceBooked from "./Components/Home/ServiceBooked";
import { useDispatch, useSelector } from "react-redux";
import Form from "./Components/Form";
import Bill from "./Components/Bill";
import Context from "./Components/Context";
import { getData } from "./Redux/FetchUserDetailSlice";
import Dummy from "./Pages/Dummy";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [logged, setlogged] = useState(false);
  const [Okcancel, setOkcancel] = useState({
    one: false,
    two: false,
  });
  const [logShow, setlogShow] = useState(false);
  const [booked, setbooked] = useState(false);
  const [billOpen, setbillOpen] = useState(false);
  const [SideBar, setSideBar] = useState(false);
  const [SideBarLog, setSideBarLog] = useState(false);
  const [msg, setmsg] = useState("");
  const dispatch = useDispatch();
  const Message = (msgg) => {
    setmsg(msgg);
  };

  const IsForm = useSelector((state) => state.showForm);

  useMemo(() => {
    logged && dispatch(getData());
  }, [logged]);

  return (
    <Context>
      <Router>
        <Navbar
          SideBarLog={SideBarLog}
          setSideBarLog={setSideBarLog}
          logged={logged}
          setlogged={setlogged}
          setlogShow={setlogShow}
          SideBar={SideBar}
          setSideBar={setSideBar}
        />
        {(logShow || Okcancel.one) && (
          <AreYouSure
            SideBarLog={SideBarLog}
            setSideBarLog={setSideBarLog}
            setlogged={setlogged}
            setlogShow={setlogShow}
            Okcancel={Okcancel}
            setOkcancel={setOkcancel}
          />
        )}
        {booked && (
          <ServiceBooked booked={booked} setbooked={setbooked} msg={msg} />
        )}
        <SideNavbar
          SideBarLog={SideBarLog}
          setSideBarLog={setSideBarLog}
          logged={logged}
          setlogged={setlogged}
          setlogShow={setlogShow}
          SideBar={SideBar}
          setSideBar={setSideBar}
        />

        {IsForm && <Form msg={msg} />}

        {billOpen && (
          <Bill billOpen={billOpen} setbillOpen={setbillOpen} msg={msg} />
        )}
        <div
          className={`${
            (logShow || booked || billOpen || IsForm) && "Bg-Filter"
          }  `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/bookService"
              element={<BookSerivce logged={logged} />}
            />
            <Route path="/contact" element={<Contact logged={logged} />} />
            <Route path="/signUp" element={<SignIn />} />

            <Route
              path="/login"
              element={<Login logged={logged} setlogged={setlogged} />}
            />

            {logged ? <Route path="/shop" element={<Shop />} /> : ""}
            {logged ? (
              <Route
                path="/service"
                element={
                  <Service
                    booked={booked}
                    setbooked={setbooked}
                    Message={Message}
                  />
                }
              />
            ) : (
              ""
            )}
            {logged ? (
              <Route path="/manageProfile" element={<ManageProfile />} />
            ) : (
              ""
            )}
            {logged ? (
              <Route
                path="/serviceDetails"
                element={
                  <ServiceDetails
                    Message={Message}
                    Okcancel={Okcancel}
                    setOkcancel={setOkcancel}
                  />
                }
              />
            ) : (
              ""
            )}

            {logged ? (
              <Route
                path="/viewBill"
                element={
                  <ViewBill Message={Message} setbillOpen={setbillOpen} />
                }
              />
            ) : (
              ""
            )}
            {logged ? (
              <Route path="/notification" element={<Notification />} />
            ) : (
              ""
            )}
            {logged ? (
              <Route path="/vehicle" element={<ChooseVehicle />} />
            ) : (
              ""
            )}
            <Route path="/*" element={<NotFound />} />
            <Route path="/building/:name" element={<Dummy />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Context>
  );
};

export default App;
