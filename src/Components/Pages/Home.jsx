import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" absolute h-full top-14 xl:left-1/4 lg:left-1/4 left-0 right-0 bg-slate-100 px-5 py-10 ">
      <div className=" w-full border-2  rounded-xl bg-slate-50 px-5 sm:px-10 sm:py-7 py-3">
        <div className="w-full">
          <li className="flex gap-4 py-2 rounded-lg">
            <img src="pic-2.png" alt="" className="w-8 xl:w-12 lg:w-10 md:w-8 h-9 xl:h-12 lg:h-10 md:h-9 rounded-full" />
            <p className=" text-xl xl:text-2xl lg:text-2xl  font-bold font-nunitoFont mt-1">
              Pritom Rabi Das
            </p>
          </li>
        </div>
        <div className=" pb-2">
          <img src="pic-2.png" alt="pic" className="w-full h-[330px] xl:h-[500px] md:h-[400px] lg:h-[460px] my-3 pb-1 rounded-md object-cover" />
          <Link
            to="/"
            className="inline-flex items-center px-3 py-2 text-sm font-normal font-interFont text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
