
const RequestItem = () => {
  return (
    <div className=" m-4 ">
        <div className=" border-2 py-4 px-6 rounded-xl flex gap-3 bg-scroll w-full">
          <div className="">
            <img src="pic-2.png" alt="" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="">
            <p className=" text-2xl text-pacifico font-semibold text-nunitoFont mt-3">
              Pritom Rabi Das
            </p>
          </div>
          <div className=" justify-end flex m-auto ml-60 gap-3">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-lg font-['interFont'] text-white font-medium px-4 py-2 rounded-lg  shadow-2xl bg-blue-700  focus:bg-blue-600">Confirm Request</button>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-lg font-['interFont'] text-white font-medium px-4 py-2 rounded-lg  shadow-2xl bg-slate-700  focus:bg-slate-600">Delete Request</button>
          </div>
        </div>
      </div>
  )
}

export default RequestItem