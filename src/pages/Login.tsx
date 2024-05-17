import { useState } from "react";
import { listImg } from "../assets/assets";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedTrue } from "../layouts/User/AppSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { storeProps } from "../store";

const accountDEMO = {
  email: "yidiElectro@gmail.com",
  pass: "yidiElectro123",
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const isLogged = useSelector((store: storeProps) => store.app.isLogged);

  if (isLogged) {
    return <Navigate to="/app" replace />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${listImg.img2})`,
      }}
      className="w-full lg:px-12 px-6 py-32 bg-cover bg-no-repeat"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isSignIn) {
            if (accountDEMO.email === email && accountDEMO.pass === pass) {
              dispatch(setIsLoggedTrue());
              navigate("/app", { replace: true });
            }
          }
        }}
        className="max-w-[600px] rounded-2xl mx-auto bg-white px-6 py-6 text-black"
      >
        <h1 className="text-yellow-400 font-semibold text-2xl text-center">
          {isSignIn ? "Login to your account" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <div className={`flex flex-col mt-6`}>
            <label
              className="text-gray-400 text-sm font-semibold mb-1"
              htmlFor="userName"
            >
              Username
            </label>
            <input
              className="bg-white outline-none border-b border-b-gray-300"
              type="text"
              id="userName"
              placeholder="Chi Thanh"
              required
            />
          </div>
        )}
        <div className="flex flex-col mt-6">
          <label
            className="text-gray-400 text-sm font-semibold mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white outline-none border-b border-b-gray-300"
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col mt-6">
          <label
            className="text-gray-400 text-sm font-semibold mb-1"
            htmlFor="pass"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              onChange={(e) => setPass(e.target.value)}
              className="bg-white w-full outline-none border-b border-b-gray-300"
              type={isShowPass ? "text" : "password"}
              placeholder="**********"
              id="pass"
              name="email"
              required
            />
            <i
              onClick={() => {
                setIsShowPass((prev) => !prev);
              }}
              className="absolute top-0 right-0 cursor-pointer text-gray-400"
            >
              {isShowPass ? <EyeOff /> : <Eye />}
            </i>
          </div>
        </div>
        {!isSignIn && (
          <div className={`flex flex-col mt-6`}>
            <label
              className="text-gray-400 text-sm font-semibold mb-1"
              htmlFor="pass"
            >
              Confirm password
            </label>
            <div className="relative w-full">
              <input
                className="bg-white w-full outline-none border-b border-b-gray-300"
                type={isShowConfirmPass ? "text" : "password"}
                placeholder="**********"
                id="confirmPass"
                required
              />
              <i
                onClick={() => {
                  setIsShowConfirmPass((prev) => !prev);
                }}
                className="absolute top-0 right-0 cursor-pointer text-gray-400"
              >
                {isShowConfirmPass ? <EyeOff /> : <Eye />}
              </i>
            </div>
          </div>
        )}
        <div className="flex justify-between gap-2 mt-6">
          <div className="flex items-center gap-1">
            <input id="remember" type="checkbox" />
            <label htmlFor="remember">
              {isSignIn
                ? "Remember me"
                : "By continuing, i agree to the terms of use & privacy policy"}
            </label>
          </div>
          <p className={`${isSignIn ? "" : "hidden"}`}>Forgot your password?</p>
        </div>
        <button className="mt-6 w-full px-6 py-3 bg-yellow-400 font-bold rounded-lg">
          {isSignIn ? "Login" : "Create account"}
        </button>
        <p className="text-gray-400 text-center mt-6">
          {isSignIn
            ? " Don't have an account yet? "
            : "Already have an account? "}
          <span
            onClick={() => {
              setIsSignIn((prev) => !prev);
            }}
            className="text-black font-medium cursor-pointer border-b-2 border-black"
          >
            {isSignIn ? "Sign Up " : "Login here"}
          </span>
        </p>
      </form>
    </div>
  );
}
