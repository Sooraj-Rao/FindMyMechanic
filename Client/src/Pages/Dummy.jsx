import { useContext } from "react";
import { Mycontext } from "../Components/Context";
import { useParams } from "react-router-dom";
import ScrollTo from "../Components/ScrollTo";


const YetTo = () => {
  const context = useContext(Mycontext);
  const { Dark } = context;

  const param = useParams();
  const name = param.name;
  return (
    <>
      <ScrollTo />
      <div
        className={` w-full py-32 text-center  font-Poppins1 px-2
    ${Dark ? "Dark2" : "Light1"}
    `}
      >
        <h1 className=" md:text-4xl text-xl  pt-32 pb-20">
          The Page
          <span className={`${Dark ? " text-teal-400" : "text-blue-700"} mx-2`}>
            {name}
          </span>
          is in Building stage...
        </h1>
        <button
          onClick={() => window.history.back()}
          className="md:px-6 md:py-2 px-4 py-2  text-lg text-white"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default YetTo;
