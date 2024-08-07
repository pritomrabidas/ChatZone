import { Link } from "react-router-dom";
import { PiChatTeardropText } from "react-icons/pi";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
const Signin = () => {
  const auth = getAuth();
  // const [emailErr, setEmailErr] = useState("");
  // const [passwordErr, setPasswordErr] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    Password: "",
  });
  const HandleSubmit = () => {
    console.log(loginData);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch((error) => {
          console.log(error.code);
        });
  };
  return (
    <div className=" w-full bg-white">
      <div className="container h-full m-auto justify-center items-center py-8">
        <div className="shadow-2xl rounded-2xl shadow-slate-400 p-4 xl:p-8 lg:p-8 md:p-6 sm:p-4 w-[370px] xl:w-[550px] lg:w-[550px] md:w-[470px] sm:w-[400px] h-[400px] xl:h-[580px] lg:h-[580px] md:h-[500px] sm:h-[430px] m-auto justify-center items-center">
          <h3 className="flex m-auto justify-center mb-2">
            <PiChatTeardropText className=" text-xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-slate-500" />
          </h3>
          <h2 className=" text-xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl w-[250px] xl:w-[380px] lg:w-[380px] md:w-[350px] sm:w-[270px] font-medium font-['pacifico'] text-gray-800 text-center flex mx-auto">
            Get Started With Easily SignIn
          </h2>
          <h2 className=" text-sm xl:text-2xl lg:text-2xl md:text-xl sm:text-base justify-center font-normal font-['lobster'] text-gray-700 text-center flex mx-auto py-2">
            Free Sign In and You Can Enjoy It.
          </h2>
          <input
            onChange={(e) => setLoginData({...loginData, email:e.target.value})}
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-600 outline-none w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-xl justify-center flex mx-auto mt-2 xl:mt-2 lg:mt-2 md:mt-1 sm:pt-1 bg-transparent drop-shadow-xl text-slate-900 text-base xl:text-base lg:text-base md:text-sm sm:text-xs"
          />
            <p className="pl-16 mt-[2px] text-red-900 text-base font-normal font-['poetsen']">
            </p>
          <input
            onChange={(e) => setLoginData({...loginData, Password:e.target.value})}
            type="password"
            placeholder="password"
            className="border-2 border-gray-600 outline-none w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-xl justify-center flex mx-auto mt-3 xl:mt-3 lg:mt-3 md:mt-2 sm:pt-1 bg-transparent drop-shadow-xl text-slate-700 text-base xl:text-base lg:text-base md:text-sm sm:text-xs"
          />
            <p className="pl-16 mt-[2px] text-red-900 text-base font-normal font-['poetsen']">
            </p>
          <button
            onClick={HandleSubmit}
            className="border-2 w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-2xl justify-center flex mx-auto mt-4 xl:mt-6 lg:mt-6 md:mt-4 sm:mt-4 drop-shadow-xl text-secandari text-base xl:text-base lg:text-base md:text-sm sm:text-xs bg-gray-800"
          >
            Sign In
          </button>
          <p className="justify-center flex mx-auto text-xs xl:text-base lg:text-base md:text-sm sm:text-xs mt-2 text-gray-700">
            Don't have an account ?{" "}
            <span className="decoration-1 list-disc">
              <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
          <button className="border-2 w-60 xl:w-96 md:w-72 sm:w-64 lg:w-96 py-2 xl:py-3 md:py-2.5 sm:py-2 lg:py-3 px-4 xl:px-6 md:px-5 lg:px-6 sm:px-4 rounded-2xl justify-center flex m-auto mt-6 xl:mt-6 lg:mt-6 md:mt-5 drop-shadow-xl text-gray-700  gap-3 items-center bg-white">
            <img
              src="google.png"
              alt=""
              className="w-8 xl:w-8 lg:w-8 md:w-7 h-8 xl:h-8 lg:h-8 md:h-7 rounded-full"
            />
            <p className="text-sm xl:text-lg lg:text-lg md:text-base sm:text-sm font-['lugrasimo'] font-semibold">
              Continue with google
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
