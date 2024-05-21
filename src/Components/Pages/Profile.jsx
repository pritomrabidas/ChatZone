import { FaCameraRetro } from "react-icons/fa";

const Profile = () => {
  return (
    <div className=" w-full h-screen  bg-slate-100 absolute top-16 z-10 overflow-hidden">
      <div className="">
      <div className=" w-screen ">
        <img src="cover-1.png" alt="" className=" w-screen h-[270px] relative" />
        <div className="absolute left-1/2 top-[200px] ml-14 m-auto flex justify-center items-center">
        <img src="pic-2.png" alt="" className=" w-32 h-32 rounded-full relative" />
        <span className="w-8 h-8 rounded-lg border-2 drop-shadow-lg border-slate-100 bg-slate-50 m-auto flex justify-center items-center absolute left-1/3 ml-[10px]"><FaCameraRetro className="text-xl text-slate-600 " /></span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Profile
