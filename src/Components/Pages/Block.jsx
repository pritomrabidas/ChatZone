
const Block = () => {
  return (
    <div className="bg-slate-100 w-3/4 h-screen absolute top-16 left-1/4">
     <div className=" m-4">
        <div className=" border-2 py-4 px-6 rounded-xl flex gap-3 bg-scroll w-full">
          <div className="">
            <img src="pic-2.png" alt="" className="w-14 xl:w-14 lg:w-12 h-14 xl:h-14 lg:h-12 rounded-xl" />
          </div>
          <div className="">
            <p className="text-xl xl:text-xl lg:text-lg text-pacifico font-semibold text-nunitoFont mt-3">
              Pritom Rabi Das
            </p>
          </div>
          <div className=" justify-end flex m-auto mr-40">
          <button className=" text-lg xl:text-lg lg:text-base font-['interFont'] text-white font-medium px-4 xl:px-4 md:px-3 py-3 xl:py-3 md:py-2 rounded-lg  shadow-2xl bg-blue-700 delay-100 ">Unblock</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block