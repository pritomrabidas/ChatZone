import { Link } from "react-router-dom"
import { PiChatTeardropText } from "react-icons/pi";

const Signin = () => {
  return (
    <div className=" w-full bg-white">
      <div className="container h-screen m-auto justify-center items-center py-8">
        <div className="shadow-2xl rounded-2xl shadow-slate-400 p-8 w-[550px] h-[580px] m-auto justify-center items-center">
          <h3 className="flex m-auto justify-center mb-2">
            <PiChatTeardropText className=" text-3xl text-slate-500"/>
          </h3>
          <h2 className=" text-4xl w-[380px] font-medium font-['pacifico'] text-gray-800 text-center flex mx-auto">
            Get Started With Easily SignIn
          </h2>
          <h2 className=" text-2xl justify-center font-normal font-['lobster'] text-gray-700 text-center flex mx-auto py-2">
            Free Sign In and You Can Enjoy It.
          </h2>
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-600 outline-none w-96 py-3 px-6 rounded-xl justify-center flex mx-auto mt-2 bg-transparent drop-shadow-xl text-slate-900 text-base"
          />
          <input
            type="password"
            placeholder="password"
            className="border-2 border-gray-600 outline-none w-96 py-3 px-6 rounded-xl justify-center flex mx-auto mt-3 bg-transparent drop-shadow-xl text-slate-700 text-base"
          />
          <button className="border-2 w-96 py-3 px-6 rounded-2xl justify-center flex mx-auto mt-6 drop-shadow-xl text-secandari text-base bg-gray-800">
            Sign In
          </button>
          <p className="justify-center flex mx-auto text-base mt-2 text-gray-700">
            Don't have an account ?{" "}
            <span className="decoration-1 list-disc">
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
          <button className="border-2 w-96 py-3 px-6 rounded-2xl justify-center flex m-auto mt-6 drop-shadow-xl text-gray-700  gap-3 items-center bg-white">
            <img src="google.png" alt="" className="w-8 h-8 rounded-full" />
            <p className="text-lg font-['lugrasimo'] font-semibold">
              Continue with google
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signin
