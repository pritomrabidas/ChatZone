import { IoIosSettings } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { RiChat1Fill } from "react-icons/ri";
import { TbLockCancel } from "react-icons/tb";
import { BsFillPeopleFill } from "react-icons/bs";
import { SlPeople } from "react-icons/sl";
import { MdPeopleAlt } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PiChatTeardropText } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { FiAlignCenter } from "react-icons/fi";
import { IoGameController } from "react-icons/io5";


const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [home, setHome] = useState(false);
  const [chat, setChat] = useState(false);
  const [people, setPeople] = useState(false);
  const [request, setRequest] = useState(false);
  const [friend, setFriend] = useState(false);
  const [block, setBlock] = useState(false);
  const [game,setGame] = useState(false)

  const HandleProfile=()=>{
    setProfile(!profile)
    setProfile(true)
    setHome("")
    setChat("")
    setPeople("")
    setRequest("")
    setFriend("")
    setBlock("")
    setGame("")
  }
  const HandleHome=()=>{
    setHome(!home)
    setHome(true)
    setProfile("")
    setChat("")
    setPeople("")
    setRequest("")
    setFriend("")
    setBlock("")
    setGame("")
    
  }
  const HandleChat=()=>{
    setChat(!chat)
    setChat(true)
    setProfile("")
    setHome("")
    setPeople("")
    setRequest("")
    setFriend("")
    setBlock("")
    setGame("")
  }
  const HandlePeople=()=>{
    setPeople(!people)
    setPeople(true)
    setProfile("")
    setHome("")
    setChat("")
    setRequest("")
    setFriend("")
    setBlock("")
    setGame("")
  }
  const HandleRequest=()=>{
    setRequest(!request)
    setFriend(true)
    setProfile("")
    setHome("")
    setChat("")
    setPeople("")
    setFriend("")
    setBlock("")
    setGame("")
  }
  const HandleFriend=()=>{
    setFriend(!friend)
    setFriend(true)
    setProfile("")
    setHome("")
    setChat("")
    setPeople("")
    setRequest("")
    setBlock("")
  }
  const HandleBlock=()=>{
    setBlock(!block)
    setBlock(true)
    setProfile("")
    setHome("")
    setChat("")
    setPeople("")
    setRequest("")
    setFriend("")
    setGame("")
  }
  const HandleGame = ()=>{
    setGame(!game)
    setGame(true)
    setProfile("")
    setHome("")
    setChat("")
    setPeople("")
    setRequest("")
    setFriend("")
    setBlock("")
      }


  return (
    <div className="fixed w-full z-20">
    <div className="">
    <div className=" bg-white justify-between w-full p-1 pl-3 shadow-lg border-4 border-white">
      <div className=" flex">
      <div className="flex gap-3">
          <span className="w-10 h-10 rounded-full m-auto items-center"><PiChatTeardropText className="w-10 h-10 rounded-full text-navegrey"/></span>
          <div className=" flex px-2 h-10 rounded-3xl bg-slate-300 m-auto items-center">
            <span className="m-auto flex items-center pl-1"><GoSearch/></span>
            <input type="search" placeholder="Search Messenger" className="w-48 outline-none placeholder:text-secandari placeholder:font-lobster text-sm px-1 bg-transparent text-navegrey font-nunitoFont " />
          </div>
        </div>
        <div className="">
          <ul className="flex ml-24 text-gray-800 text-3xl gap-3">
            <li onClick={HandleHome} style={{ backgroundColor: home ? 'rgb(241 245 249)' : '', transition: 'background-color 0.3s ease' }} className=" w-28 h-14 m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100"><IoMdHome/></li>
            <li onClick={HandleRequest} style={{ backgroundColor: request ? 'rgb(241 245 249)' : '', transition: 'background-color 0.3s ease' }} className=" w-28 h-14 m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100"><MdPeopleAlt /></li>
            <li onClick={HandleFriend} style={{ backgroundColor: friend ? 'rgb(241 245 249)' : '', transition: 'background-color 0.3s ease' }} className=" w-28 h-14 m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100"><SlPeople /></li>
            <li onClick={HandleBlock} style={{ backgroundColor: block ? 'rgb(241 245 249)' : '', transition: 'background-color 0.3s ease' }} className=" w-28 h-14 m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100"><TbLockCancel /></li>
            <li onClick={HandleGame} style={{ backgroundColor: game ? 'rgb(241 245 249)' : '', transition: 'background-color 0.3s ease' }} className=" w-28 h-14 m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100"><IoGameController /></li>
          </ul>
        </div>
        <div className="flex justify-end m-auto">
          <ul className="text-navegrey text-2xl ml-6 flex gap-3">
            <li className=" w-10 h-10 rounded-full bg-slate-400 m-auto items-center flex justify-center">
            <img src="pic-2.png" alt="" className="w-8 h-8 rounded-full" />
            </li>
            <li className=" w-10 h-10 rounded-full bg-slate-400 m-auto items-center flex justify-center"><FiAlignCenter/></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    <div>
      <div className="pl-3 pt-2 bg-slate-100 w-1/5 h-screen hover:overflow-scroll "> 
        <div className="">
          <ul className="pt-2 text-lg text-pacifico font-semibold text-nunitoFont">
            <li onClick={HandleProfile} style={{ backgroundColor: profile ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-4 mb-3 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <img src="pic-2.png" alt="" className="w-8 h-8 rounded-full" />
              <p>Pritom Rabi Das</p>
              <span className="text-2xl ml-2 mt-[2px]"><Link to="/profile"><IoIosSettings/></Link></span>
            </li>
            <li onClick={HandleHome} style={{ backgroundColor: home ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-2 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><IoMdHome className="text-navegrey"/></span>
              <h3 className="">Home</h3>
            </li>
            <li onClick={HandleChat} style={{ backgroundColor: chat ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><RiChat1Fill className="text-navegrey"/></span>
              <h3 className="">Chat</h3>
            </li>
            <li onClick={HandlePeople} style={{ backgroundColor: people ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><BsFillPeopleFill className="text-navegrey"/></span>
              <h3 className="">People</h3>
            </li>
            <li onClick={HandleRequest} style={{ backgroundColor: request ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><MdPeopleAlt className="text-navegrey"/></span>
              <h3 className="">Friend Request</h3>
            </li>
            <li onClick={HandleFriend} style={{ backgroundColor: friend ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><SlPeople className="text-navegrey"/></span>
              <h3 className="">Friends</h3>
            </li>
            <li onClick={HandleBlock} style={{ backgroundColor: block ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><TbLockCancel className="text-navegrey"/></span>
              <h3 className="">Block</h3>
            </li>
            <li onClick={HandleGame} style={{ backgroundColor: game ? 'rgb(203 213 225)' : '', transition: 'background-color 0.3s ease' }} className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg">
              <span className="text-2xl ml-2 mt-[2px] "><IoGameController className="text-navegrey"/></span>
              <h3 className="">Game</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
