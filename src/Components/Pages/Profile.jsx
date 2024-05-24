import { FaCameraRetro } from "react-icons/fa";
import { MdEditDocument } from "react-icons/md";

const Profile = () => {
  return (
    <div className=" bg-slate-100 absolute left-1/4">
      <div className=" h-screen w-full">
        <div className="">
          <img
            src="cover-1.png"
            alt=""
            className="w-screen h-[270px] relative"
          />
          <div className="absolute left-[40%] top-[200px]  m-auto flex justify-center items-center">
            <img
              src="pic-2.png"
              alt=""
              className=" w-32 h-32 rounded-full relative"
            />
            <span className="w-8 h-8 rounded-lg border-2 drop-shadow-lg border-slate-100 bg-slate-50 m-auto flex justify-center items-center absolute left-1/3 ml-[10px]">
              <FaCameraRetro className="text-xl text-slate-600 " />
            </span>
          </div>
        </div>
        <div className="mx-auto flex justify-center mt-16  gap-4">
          <span className="text-2xl font-bold text-red-950 p-1 rounded-xl border-[1px] border-slate-200 drop-shadow-md bg-slate-50">
            <MdEditDocument />
          </span>
          <p className="text-3xl  text-pacifico font-bold text-nunitoFont">
            Pritom Rabi Das
          </p>
        </div>
        <div className="mx-auto flex justify-center my-6 gap-4">
          <button
            type="button"
            className="px-5 py-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add Request
          </button>
          <button
            type="button"
            className="px-5 py-3 text-base font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800  focus:outline-none focus:ring-slate-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            Message
          </button>
        </div>
        <div className="p-6 bg-slate-100">
          <div className=" bg-white border border-gray-100 drop-shadow-2xl rounded-xl shadow dark:bg-gray-100 dark:border-gray-200">
            <div className="">
            <li className="flex gap-4 m-3 py-2 pl-2 rounded-lg">
              <img src="pic-2.png" alt="" className="w-12 h-12 rounded-full" />
              <p className=" text-3xl text-pacifico font-semibold text-nunitoFont mt-1">Pritom Rabi Das</p>
            </li>
            </div>
            <a href="#">
              <img
                className="rounded-t-lg w-[800px] mx-auto justify-center h-[500px]"
                src="pic-2.png"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 font-['nunitoFont'] text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-800">
                  Noteworthy technology acquisitions 2024
                </h5>
              </a>
              <p className="mb-3 font-normal font-['lobster'] text-slate-900">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
