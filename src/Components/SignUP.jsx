import { Link } from "react-router-dom"
import { PiChatTeardropText } from "react-icons/pi";

const SignUP = () => {
  return (
    <div className=" w-full bg-white">
      <div className="container h-screen m-auto justify-center items-center py-8">
        <div className="shadow-2xl rounded-2xl shadow-slate-400 p-8 w-[550px] h-[580px] m-auto justify-center items-center">
          <h3 className="flex m-auto justify-center mb-2">
            <PiChatTeardropText className=" text-3xl text-slate-500"/>
          </h3>
          <h2 className=" text-4xl w-[380px] font-medium font-['pacifico'] text-gray-800 text-center flex mx-auto">
            Get Started With Easily SignUp
          </h2>
          <h2 className=" text-2xl justify-center font-normal font-['lobster'] text-gray-700 text-center flex mx-auto py-2">
            Free Register and You Can Enjoy It.
          </h2>
          <input
            type="name"
            placeholder="Full Name"
            className="border-2 border-gray-600 outline-none w-96 py-3 px-6 rounded-xl justify-center flex m-auto mt-2 bg-transparent drop-shadow-xl text-slate-900 text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-600 outline-none w-96 py-3 px-6 rounded-xl justify-center flex mx-auto mt-2 bg-transparent drop-shadow-xl text-slate-900 text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 border-gray-600 outline-none w-96 py-3 px-6 rounded-xl justify-center flex mx-auto mt-3 bg-transparent drop-shadow-xl text-slate-700 text-base"
          />
          <button className="border-2 w-96 py-3 px-6 rounded-2xl justify-center flex mx-auto mt-6 drop-shadow-xl text-secandari text-base bg-gray-800">
             Registration
          </button>
          <p className="justify-center flex mx-auto text-base mt-2 text-gray-700">
            Don't have an account ?{" "}
            <span className="decoration-1 list-disc">
              <Link to="/signin"> SignIn</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUP
