import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const FriendItem = () => {
  const [DropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!DropdownVisible);
  };
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
          <button onClick={toggleDropdown}>
            <HiOutlineDotsVertical className="text-2xl text-red-600"/>
          </button>
          {DropdownVisible && (
            <div className="dropdown">
              <ul className="flex gap-2 z-10">
              <li className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-lg font-['interFont'] text-white font-medium px-4 py-3 rounded-lg  shadow-2xl bg-blue-700 delay-100 ">UnFriend</li>
              <li className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg text-lg font-['interFont'] text-white font-medium px-4 py-3 rounded-lg  shadow-2xl bg-blue-700 delay-100 ">block</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FriendItem;
