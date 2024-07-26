import { HiOutlineDotsVertical } from "react-icons/hi";

const FriendItem = () => {
  return (
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
        <div className=" justify-end flex m-auto text-end ">
          <button>
            <HiOutlineDotsVertical className="text-xl xl:text-2xl lg:text-xl text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
