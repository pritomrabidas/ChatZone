// import { BsThreeDots } from "react-icons/bs";

const ChatItem = () => {
  return (
    <div className=" m-4">
        <div className=" py-2 pl-4 rounded-xl flex gap-3 bg-scroll w-full bg-green-50 justify-between">
          <div className="flex gap-3 items-center">
            <img src="pic-2.png" alt="" className="xl:w-14 lg:w-12 md:w-10 sm:w-10 w-10 xl:h-14 lg:h-12 md:h-10 sm:h-10 h-10 rounded-xl" />
            <p className=" text-lg xl:text-xl lg:text-lg text-pacifico font-semibold text-nunitoFont ">
              Pritom Rabi Das
            </p>
          </div>
          {/* <div className=" mr-9 w-10 h-10 rounded-full hover:bg-white mt-1">
            <BsThreeDots className=" text-2xl text-green-50 hover:text-slate-900 m-auto mt-2"/>
          </div> */}
        </div>
      </div>
  )
}

export default ChatItem
