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
import { RiGroup2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [home, setHome] = useState(false);
  const [chat, setChat] = useState(false);
  const [people, setPeople] = useState(false);
  const [request, setRequest] = useState(false);
  const [friend, setFriend] = useState(false);
  const [block, setBlock] = useState(false);
  const [game, setGame] = useState(false);
  const [group, setGroup] = useState(false);
  const [setting, setSetting] = useState(false);

  const HandleSetting = () => {
    setSetting(!setting);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
  };

  const HandleProfile = () => {
    setProfile(!profile);
    setProfile(true);
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandleHome = () => {
    setHome(!home);
    setHome(true);
    setProfile("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandleChat = () => {
    setChat(!chat);
    setChat(true);
    setProfile("");
    setHome("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandlePeople = () => {
    setPeople(!people);
    setPeople(true);
    setProfile("");
    setHome("");
    setChat("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandleRequest = () => {
    setRequest(!request);
    setFriend(true);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setFriend("");
    setBlock("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandleFriend = () => {
    setFriend(!friend);
    setFriend(true);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setBlock("");
    setGroup("");
    setSetting("");
  };
  const HandleBlock = () => {
    setBlock(!block);
    setBlock(true);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setGame("");
    setGroup("");
    setSetting("");
  };
  const HandleGroup = () => {
    setGroup(!group);
    setGroup(true);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGame("");
    setSetting("");
  };
  const HandleGame = () => {
    setGame(!game);
    setGame(true);
    setProfile("");
    setHome("");
    setChat("");
    setPeople("");
    setRequest("");
    setFriend("");
    setBlock("");
    setGroup("");
    setSetting("");
  };

  return (
    <div className="fixed w-full h-full z-20">
      <div className=" bg-white w-full gap-2 p-1 xl:p-1 lg:p-1 md:p-0 sm:p-0 pl-3 shadow-lg border-8 xl:border-8 lg:border-8 md:border-8 sm:border-2 border-white ">
        <div className=" flex ">
          <div className="flex gap-1 xl:gap-3 md:gap-0 sm:gap-1 lg:gap-1 justify-start">
            <span>
              <PiChatTeardropText className="w-5 xl:w-10 lg:w-10 md:w-7 sm:w-6 h-5 xl:h-10 lg:h-10 md:h-7 sm:h-6 xl:mt-2 lg:mt-2 md:mt-1 sm:mt-2 mb-2 rounded-full text-navegrey " />
            </span>
            <div className=" flex px-1 xl:px-4 lg:px-3 md:px-1 sm:px-1 xl:pl-4 lg:pl-4 md:pl-2 sm:pl-1 pl-1 xl:pr-10 lg:pr-9 md:pr-0 sm:pr-0 pr-0 h-7 xl:h-11 lg:h-11 md:h-9 sm:h-8 rounded-3xl xl:rounded-3xl bg-slate-300 m-auto items-center ">
              <span className="m-auto flex items-center pl-2 xl:text-lg lg:text-base md:text-xs sm:text-xs text-xs">
                <GoSearch />
              </span>
              <input
                type="search"
                placeholder="Search Messenger"
                className="w-32 xl:w-48 lg:w-48 md:w-36 sm:w-36 outline-none placeholder:text-secandari placeholder:font-lobster text-xs md:text-xs sm:text-xs px-1 bg-transparent text-navegrey font-nunitoFont "
              />
            </div>
          </div>
          <div className=" flex justify-center mx-auto">
            <ul className="flex ml-0 xl:ml-24 lg:ml-1 md:ml-10 sm:ml-2 text-gray-800 text-base xl:text-3xl lg:text-2xl md:text-xl sm:text-base gap-3 xl:gap-4 lg:gap-2 md:gap-2 sm:gap-3 ">
              <Link to="/">
                <li
                  onClick={HandleHome}
                  style={{
                    backgroundColor: home ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className=" w-8 xl:w-28 lg:w-24 md:w-16 sm:w-9 h-7 md:h-10 xl:h-14 sm:h-8 md:mt-1 md:rounded-md m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100 "
                >
                  <IoMdHome />
                </li>
              </Link>
              <Link to="/request">
                <li
                  onClick={HandleRequest}
                  style={{
                    backgroundColor: request ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="w-8 xl:w-28 md:w-16 sm:w-9 h-7 md:h-10 xl:h-14 sm:h-8 md:mt-1 md:rounded-md m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100 lg:w-24"
                >
                  <MdPeopleAlt />
                </li>
              </Link>
              <Link to="/friend">
                <li
                  onClick={HandleFriend}
                  style={{
                    backgroundColor: friend ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="w-8 xl:w-28 md:w-16 sm:w-9 h-7 md:h-10 xl:h-14 sm:h-8 md:mt-1 md:rounded-md m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100 lg:w-24"
                >
                  <SlPeople />
                </li>
              </Link>
              <Link to="/block">
                <li
                  onClick={HandleBlock}
                  style={{
                    backgroundColor: block ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className=" w-8 xl:w-28 md:w-16 sm:w-9 h-7 md:h-10 xl:h-14 sm:h-8 md:mt-1 md:rounded-md m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100 lg:w-24"
                >
                  <TbLockCancel />
                </li>
              </Link>
              <li
                onClick={HandleGame}
                style={{
                  backgroundColor: game ? "rgb(241 245 249)" : "",
                  transition: "background-color 0.3s ease",
                }}
                className="w-8 xl:w-28 md:w-16 sm:w-9 h-7 md:h-10 xl:h-14 sm:h-8 md:mt-1 md:rounded-md m-auto flex items-center justify-center rounded-lg bg-white delay-300 hover:bg-slate-100 lg:w-24"
              >
                <IoGameController />
              </li>
            </ul>
          </div>
          <div className="flex justify-end m-auto">
            <ul className="text-navegrey text-2xl flex gap-3">
              {/* <li className=" w-10 h-10 rounded-full bg-slate-400 m-auto items-center flex justify-center">
                <RiGroup2Line className=" text-[33px] text-blue-950" />
              </li> */}
              {/* <li
                onClick={HandleProfile}
                style={{
                  backgroundColor: profile ? "rgb(203 213 225)" : "",
                  transition: "background-color 0.3s ease",
                }}
                className=" w-10 h-10 rounded-full bg-slate-400 m-auto items-center flex justify-center"
              >
                <Link to="/profile">
                  <img
                    src="pic-2.png"
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                </Link>
              </li> */}
              {setting ? (
                <li
                  onClick={() => setSetting(false)}
                  style={{
                    backgroundColor: setting ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className=" w-5 md:w-7 xl:w-10 lg:w-9 sm:w-6 h-5 md:h-7 xl:h-10 lg:h-9 sm:h-6 rounded-full bg-slate-400 m-auto items-center flex justify-center"
                >
                  <RxCross2 className=" xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm" />
                </li>
              ) : (
                <li
                  onClick={HandleSetting}
                  style={{
                    backgroundColor: setting ? "rgb(241 245 249)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className=" w-5 md:w-7 xl:w-10 lg:w-9 sm:w-6 h-5 md:h-7 xl:h-10 lg:h-9 sm:h-6 rounded-full bg-slate-400 m-auto items-center flex justify-center"
                >
                  <FiAlignCenter className="xl:text-xl lg:text-lg md:text-base sm:text-sm text-sm" />
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
        <div className="hidden sm:hidden md:block lg:block xl:block pl-3 pt-2 bg-slate-100 w-1/4 h-full overflow-scroll xl:overflow-scroll fixed ">
          <div className="">
            <ul className="pt-3 text-lg xl:text-lg lg:text-base md:text-sm text-pacifico font-semibold md:font-medium text-nunitoFont">
              <Link to="/profile">
                <li
                  onClick={HandleProfile}
                  style={{
                    backgroundColor: profile ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-4 mb-3 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mb-1"
                >
                  <img
                    src="pic-2.png"
                    alt=""
                    className="w-8 md:w-6 h-8 md:h-6 rounded-full"
                  />
                  <p>Pritom Rabi Das</p>
                </li>
              </Link>
              {/* <Link to="/">
                <li
                  onClick={HandleHome}
                  style={{
                    backgroundColor: home ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-2 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg"
                >
                  <span className="text-2xl ml-2 mt-[2px] ">
                    <IoMdHome className="text-navegrey" />
                  </span>
                  <h3 className="">Home</h3>
                </li>
              </Link> */}
              <Link to="/chat">
                <li
                  onClick={HandleChat}
                  style={{
                    backgroundColor: chat ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <RiChat1Fill className="text-navegrey" />
                  </span>
                  <h3 className="">Chat</h3>
                </li>
              </Link>
              <Link to="/people">
                <li
                  onClick={HandlePeople}
                  style={{
                    backgroundColor: people ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <BsFillPeopleFill className="text-navegrey" />
                  </span>
                  <h3 className="">People</h3>
                </li>
              </Link>
              <Link to="/request">
                <li
                  onClick={HandleRequest}
                  style={{
                    backgroundColor: request ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <MdPeopleAlt className="text-navegrey" />
                  </span>
                  <h3 className="">Friend Request</h3>
                </li>
              </Link>
              <Link to="/friend">
                <li
                  onClick={HandleFriend}
                  style={{
                    backgroundColor: friend ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <SlPeople className="text-navegrey" />
                  </span>
                  <h3 className="">Friends</h3>
                </li>
              </Link>
              <Link to="/group">
                <li
                  onClick={HandleGroup}
                  style={{
                    backgroundColor: group ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <RiGroup2Line className="text-navegrey" />
                  </span>
                  <h3 className="">Group</h3>
                </li>
              </Link>
              <Link to="/block">
                <li
                  onClick={HandleBlock}
                  style={{
                    backgroundColor: block ? "rgb(203 213 225)" : "",
                    transition: "background-color 0.3s ease",
                  }}
                  className="flex gap-2 mt-5 hover:bg-slate-300 hover:w-screen py-2 pl-2 rounded-lg lg:mt-3"
                >
                  <span className="text-2xl md:text-xl ml-2 mt-[2px] ">
                    <TbLockCancel className="text-navegrey" />
                  </span>
                  <h3 className="">Block</h3>
                </li>
              </Link>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
