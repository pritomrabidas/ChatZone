import { GoSearch } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { RiChat1Fill } from "react-icons/ri";
import { TbLockCancel } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { PiChatTeardropText } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <div className="pl-3 pt-2 bg-slate-200 w-1/5 h-screen fixed hover:overflow-scroll">
        <div className="flex gap-3">
          <span className="w-10 h-10 rounded-full"><PiChatTeardropText className="w-10 h-10 rounded-full text-navegrey"/></span>
          <div className=" flex px-2 rounded-3xl bg-slate-300">
            <span className="m-auto flex items-center pl-1"><GoSearch/></span>
            <input type="search" placeholder="Search Messenger" className="outline-none placeholder:text-secandari placeholder:font-lobster text-sm w-40 px-1 bg-transparent text-navegrey font-nunitoFont " />
          </div>
        </div>
        <div className="">
          <ul className="pt-9 text-lg text-pacifico font-semibold text-nunitoFont">
            <li className="flex gap-2 mb-3 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <img src="pic-2.png" alt="" className="w-8 h-8 rounded-full" />
              <h3>Pritom Rabi Das</h3>
              <span className="text-2xl ml-2 mt-[2px]"><IoIosSettings/></span>
            </li>
            <li className="flex gap-2 mt-2 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><CiHome className="text-navegrey"/></span>
              <h3 className="">Home</h3>
            </li>
            <li className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><RiChat1Fill className="text-navegrey"/></span>
              <h3 className="">Chat</h3>
            </li>
            <li className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><SlPeople className="text-navegrey"/></span>
              <h3 className="">People</h3>
            </li>
            <li className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><MdPeopleAlt className="text-navegrey"/></span>
              <h3 className="">Friend Request</h3>
            </li>
            <li className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><BsFillPeopleFill className="text-navegrey"/></span>
              <h3 className="">Friends</h3>
            </li>
            <li className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><TbLockCancel className="text-navegrey"/></span>
              <h3 className="">Block</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
