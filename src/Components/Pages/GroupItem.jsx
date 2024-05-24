import { FaRegCircle } from "react-icons/fa";

const GroupItem = () => {
  return (
    <div className=" m-4">
      <div className=" border-2 py-4 px-6 rounded-xl flex gap-3 bg-scroll w-full">
        <div className="">
          <img src="pic-2.png" alt="" className="w-16 h-16 rounded-xl" />
        </div>
        <div className="">
          <p className=" text-2xl text-pacifico font-semibold text-nunitoFont mt-3">
            Pritom Rabi Das
          </p>
        </div>
        <div className=" justify-end flex m-auto mr-40">
          <span>
            <FaRegCircle className="text-2xl" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GroupItem;
