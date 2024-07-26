
const Block = () => {
  return (
    <div className="bg-slate-100 xl:w-3/4 lg:w-3/4 w-full h-screen absolute xl:top-24 lg:top-20 md:top-14 sm:top-10 top-14  xl:left-1/4 lg:left-1/4 left-0">
     <div className=" m-4">
        <div className=" border-2 py-4 px-6 rounded-xl flex gap-3 bg-scroll w-full justify-between items-center">
        <div className=" flex items-center gap-4 ">
          <img
            src="pic-2.png"
            alt=""
            className="xl:w-16 lg:w-12 md:w-10 sm:w-10 w-10 xl:h-16 lg:h-12 md:h-10 sm:h-10 h-10 rounded-xl"
          />
          <p className="xl:text-2xl lg:text-xl md:text-lg sm:text-lg text-sm text-pacifico font-semibold text-nunitoFont">
            Pritom Rabi Das
          </p>
        </div>
          <div className=" justify-end flex m-auto ">
          <button className=" text-base xl:text-lg lg:text-base font-['interFont'] text-white font-medium px-3 xl:px-4 md:px-3 py-2 xl:py-3 md:py-2 rounded-lg  shadow-2xl bg-blue-700 delay-100 ">Unblock</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Block