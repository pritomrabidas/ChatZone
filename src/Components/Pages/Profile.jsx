import { useState } from "react";
import { FaCameraRetro } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
  const [show, setShow] = useState(true);
  const HandleCamera = () => {
    setShow(false);
  };
  return (
    <div className=" bg-slate-100 w-full absolute xl:left-1/4 lg:left-1/4 md:left-0 sm:left-0 left-0 ">
      <div className=" h-full w-full">
        <div className="">
          <img
            src="cover-1.png"
            alt=""
            className="w-screen h-[270px] xl:h-[270px] lg:h-[240px] md:h-[190px] relative"
          />
          <div className="absolute left-[45%] top-[200px] xl:top-[200px] lg:top-[170px] md:top-[120px] m-auto flex justify-center items-center">
            <img
              src="pic-2.png"
              alt=""
              className=" w-32 xl:w-32 lg:w-32 md:w-28 h-32 xl:h-32 lg:h-32 md:h-28 rounded-full relative"
            />
            <span
              onClick={() => HandleCamera()}
              className="w-8 xl:w-8 lg:w-8 md:w-6 h-8 xl:h-8 lg:h-8 md:h-6 rounded-lg border-2 drop-shadow-lg border-slate-100 bg-slate-50 m-auto flex justify-center items-center absolute left-1/3 ml-[10px]"
            >
              {show ? (
                <FaCameraRetro className="text-xl xl:text-xl lg:text-xl md:text-sm text-slate-600 " />
              ) : (
                <input type="file" className=" bg-transparent border-none" />
              )}
            </span>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-16 gap-4">
          <span className="text-2xl xl:text-3xl lg:text-2xl md:text-xl font-bold text-red-950 p-1 md:p-2 rounded-xl border-[1px] border-slate-200 drop-shadow-md bg-slate-50">
            <MdEditDocument />
          </span>
          <p className="text-3xl xl:text-3xl lg:text-2xl md:text-lg md:pt-1 text-pacifico font-bold text-nunitoFont">
            Pritom Rabi Das
          </p>
        </div>
        <div className="mx-auto flex justify-center my-6 gap-4">
          <Link to="/people">
            <button
              type="button"
              className="px-5 xl:px-5 lg:px-5 md:px-2 py-3 text-sm xl:text-sm lg:text-sm md:text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Request
            </button>
          </Link>
          <button
            type="button"
            className="px-5 xl:px-5 lg:px-5 md:px-2 py-3 text-sm xl:text-sm lg:text-sm md:text-xsfont-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800  focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            <Link to="/chat">Message</Link>
          </button>
        </div>
        <div className="p-6 bg-slate-100">
          <div className=" bg-white border border-gray-100 drop-shadow-2xl rounded-xl shadow dark:bg-gray-100 dark:border-gray-200">
            <div className="">
              <li className="flex gap-4 m-3 py-2 pl-2 rounded-lg">
                <img
                  src="pic-2.png"
                  alt=""
                  className="w-12 xl:w-12 lg:w-10 md:w-8 h-12 xl:h-12 lg:h-10 md:h-8 rounded-full"
                />
                <p className=" text-3xl xl:text-3xl lg:text-2xl md:text-lg text-pacifico font-semibold text-nunitoFont mt-1">
                  Pritom Rabi Das
                </p>
              </li>
            </div>
            <a href="#">
              <img
                className="rounded-t-lg w-[800px] xl:w-[800px] lg:w-[600px] md:w-[450px] mx-auto justify-center h-[500px] xl:h-[500px] lg:h-[420px] md:h-[350px]"
                src="pic-2.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
