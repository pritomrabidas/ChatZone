import { Link } from "react-router-dom";
import { PiChatTeardropText } from "react-icons/pi";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
const SignUP = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const auth = getAuth();
  const [userError, setuserError] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
  });
  const HandleSubmit = () => {
    if (!name) {
      setuserError({ nameError: "Name is required" });
    } else if (!email) {
      setuserError({ emailError: "Email is required" });
    } else if (!password) {
      setuserError({ passwordError: "Password is required" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
          sendEmailVerification(auth.currentUser)
          toast.success(" SignUp Succesfull , Please confirm your email verification", {
            position: "top-center",
            autoClose: 3000,
            closeOnClick: true,
            theme: "light",
          });
          setName("");
          setEmail("");
          setPassword("");
          setuserError("")
        })
        .catch((error) => {
          if (error.code.includes("auth/invalid-email")) {
            setuserError({ emailError: "Invalid Email" });
          } else if (error.code.includes("auth/email-already-in-use")) {
            setuserError({
              emailError: "Email Already Use ,Please try another Email",
            });
          } else if (error.code.includes("auth/weak-password")) {
            setuserError({
              passwordError: "Password should be at least 6 characters",
            });
          }
          console.log(error.code);
        });
    }
  };
  return (
    <div className=" w-full bg-white">
      <div className="container h-screen m-auto justify-center items-center py-8">
        <ToastContainer />
        <div className="shadow-2xl rounded-2xl shadow-slate-400 p-4 xl:p-8 lg:p-8 md:p-6 sm:p-4 w-[370px] xl:w-[550px] lg:w-[550px] md:w-[470px] sm:w-[400px] h-[400px] xl:h-[580px] lg:h-[580px] md:h-[500px] sm:h-[430px] m-auto justify-center items-center">
          <h3 className="flex m-auto justify-center mb-2">
            <PiChatTeardropText className=" text-xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-slate-500" />
          </h3>
          <h2 className=" text-xl xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl w-[250px] xl:w-[380px] lg:w-[380px] md:w-[350px] sm:w-[270px] font-medium font-['pacifico'] text-gray-800 text-center flex mx-auto">
            Get Started With Easily SignUp
          </h2>
          <h2 className=" text-sm xl:text-2xl lg:text-2xl md:text-xl sm:text-base justify-center font-normal font-['lobster'] text-gray-700 text-center flex mx-auto py-2">
            Free Register and You Can Enjoy It.
          </h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            placeholder="Full Name"
            className="border-2 border-gray-600 outline-none w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-xl justify-center flex mx-auto mt-2 xl:mt-2 lg:mt-2 md:mt-1 sm:pt-1 bg-transparent drop-shadow-xl text-slate-900 text-base xl:text-base lg:text-base md:text-sm sm:text-xs"
          />
          {userError.nameError && (
            <p className="pl-16 mt-[2px] text-red-900 text-base font-normal font-['poetsen']">
              {userError.nameError}
            </p>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            className="border-2 border-gray-600 outline-none w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-xl justify-center flex mx-auto mt-2 xl:mt-2 lg:mt-2 md:mt-1 sm:pt-1 bg-transparent drop-shadow-xl text-slate-900 text-base xl:text-base lg:text-base md:text-sm sm:text-xs"
          />
          {userError.emailError && (
            <p className="pl-16 mt-[2px] text-red-900 text-base font-normal font-['poetsen']">
              {userError.emailError}
            </p>
          )}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border-2 border-gray-600 outline-none w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-xl justify-center flex mx-auto mt-2 xl:mt-2 lg:mt-2 md:mt-1 sm:pt-1 bg-transparent drop-shadow-xl text-slate-900 text-base xl:text-base lg:text-base md:text-sm sm:text-xs"
          />
          {userError.passwordError && (
            <p className="pl-16 mt-[2px] text-red-900 text-base font-normal font-['poetsen']">
              {userError.passwordError}
            </p>
          )}
          <button
            onClick={HandleSubmit}
            className="border-2 w-60 xl:w-96 lg:w-96 md:w-72 sm:w-64 py-2 xl:py-3 lg:py-3 md:py-2.5 sm:py-2 px-4 xl:px-6 lg:px-6 md:px-5 sm:px-4 rounded-2xl justify-center flex mx-auto mt-4 xl:mt-6 lg:mt-6 md:mt-4 sm:mt-4 drop-shadow-xl text-secandari text-base xl:text-base lg:text-base md:text-sm sm:text-xs bg-gray-800"
          >
            Registration
          </button>
          <p className="justify-center flex mx-auto text-xs xl:text-base lg:text-base md:text-sm sm:text-xs mt-2 text-gray-700">
            Don't have an account ?{" "}
            <span className="decoration-1 list-disc">
              <Link to="/signin">
                <span className="underline hover:text-gray-500">SignIn</span>{" "}
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
