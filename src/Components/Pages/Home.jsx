const Home = () => {
  return (
    <div className=" absolute h-screen top-16 left-1/4 bg-slate-100 px-5 py-10 ">
      <div className=" w-full border-2 drop-shadow-2xl rounded-xl bg-slate-50 px-10 py-5">
        <div className="">
          <li className="flex gap-4 py-2 rounded-lg">
            <img src="pic-2.png" alt="" className="w-12 h-12 rounded-full" />
            <p className=" text-3xl text-pacifico font-semibold text-nunitoFont mt-1">
              Pritom Rabi Das
            </p>
          </li>
        </div>
        <div className=" pb-2">
          <img src="pic-2.png" alt="" className="w-screen h-[500px] my-3 pb-1" />
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
