import { BsThreeDots } from "react-icons/bs";

const ChatItem = () => {
  return (
    <div className=" m-4">
        <div className=" py-2 pl-4 rounded-xl flex gap-3 bg-scroll w-full bg-green-50 justify-between">
          <div className="flex gap-3">
            <img src="pic-2.png" alt="" className="w-14 h-14 rounded-xl" />
            <p className=" text-xl text-pacifico font-semibold text-nunitoFont mt-3">
              Pritom Rabi Das
            </p>
          </div>
          <div className=" mr-9 w-10 h-10 rounded-full hover:bg-white mt-1">
            <BsThreeDots className=" text-2xl text-green-50 hover:text-slate-600 m-auto mt-2"/>
          </div>
        </div>
      </div>
  )
}

export default ChatItem
