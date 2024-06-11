import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { propsSignIn } from "../interface/propsSignIn";
import Loading from "../components/Loading/Loading";
import { useCreateUser } from "../customHook/useCreateUser";
import { useCheckUser } from "../customHook/checkUser";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../store";
import { Navigate } from "react-router-dom";
import {
  setLoadingSummitTrue,
  setIsSubmit,
  setLoadingSummitFalse,
  setForgotTrue,
} from "../layouts/User/AppSlice";
import { URL_SERVER } from "../base/base";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<propsSignIn>();
  const [isLogin, setIsLogin] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const { checkUser, isCheck } = useCheckUser();
  const { createNewUser, isCreate } = useCreateUser(checkUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin === false) {
      setIsForgot(false);
    }
  }, [isLogin, setIsForgot]);

  const onSubmit: SubmitHandler<propsSignIn> = (data) => {
    if (isForgot) {
      dispatch(setLoadingSummitTrue());
      dispatch(setIsSubmit());
      dispatch(setForgotTrue());
      fetch(`${URL_SERVER}/send-email/${data.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          console.log("Email sent successfully");
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          dispatch(setLoadingSummitFalse());
        });
    } else {
      if (isLogin) {
        checkUser(data);
      } else {
        createNewUser(data);
      }
    }
  };

  const isLogged = useSelector((store: storeProps) => store.app.isLogged);

  if (isLogged) {
    return <Navigate to="/app" replace />;
  }

  if (isCheck || isCreate) {
    return <Loading />;
  }

  return (
    <div
      style={{
        backgroundImage: "url(https://ik.imagekit.io/yidiElectro/image1.webp)",
      }}
      className="w-full flex min-h-screen justify-center items-center py-20 px-4"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="form-login">
        <h2 className="text-3xl text-yellow-400 font-bold ">
          {isLogin ? (isForgot ? "Forgot password" : "Login") : "Sign up"}
        </h2>
        {!isLogin && (
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Chi Thanh"
              className={`${errors.username ? "border-2 border-red-600" : ""}`}
              {...register("username", { required: "This field is required" })}
            />
            {errors.username && <p>{errors.username.message?.toString()}</p>}
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            className={`${errors.email ? "border-2 border-red-600" : ""}`}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email invalidate",
              },
            })}
          />
          {errors.email && <p>{errors.email.message?.toString()}</p>}
        </div>
        {!isForgot && (
          <div>
            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={isShow1 ? "text" : "password"}
                id="password"
                placeholder="Example123@"
                className={`${
                  errors.password ? "border-2 border-red-600" : ""
                }`}
                {...register("password", {
                  required: "This field is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{11,}$/,
                    message:
                      "Password must be longer than 10 characters and contain 1 uppercase character and 1 special character",
                  },
                })}
              />
              {isShow1 ? (
                <EyeOff
                  onClick={() => setIsShow1((is) => !is)}
                  className="absolute right-3 top-1/2 translate-y-1 cursor-pointer text-gray-400"
                />
              ) : (
                <Eye
                  onClick={() => setIsShow1((is) => !is)}
                  className="absolute right-3 top-1/2 translate-y-1 cursor-pointer text-gray-400"
                />
              )}
            </div>
            {errors.password && <p>{errors.password.message?.toString()}</p>}
          </div>
        )}
        {!isLogin && (
          <div>
            <div className="relative">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type={isShow2 ? "text" : "password"}
                id="confirmPassword"
                placeholder="***********"
                className={`${
                  errors.confirmPassword ? "border-2 border-red-600" : ""
                }`}
                {...register("confirmPassword", {
                  required: "Please confirm your password again",
                  validate: (value: string) =>
                    getValues().password === value || "Incorrect password",
                })}
              />
              {isShow2 ? (
                <EyeOff
                  onClick={() => setIsShow2((is) => !is)}
                  className="absolute right-3 top-1/2 translate-y-1 cursor-pointer text-gray-400"
                />
              ) : (
                <Eye
                  onClick={() => setIsShow2((is) => !is)}
                  className="absolute right-3 top-1/2 translate-y-1 cursor-pointer text-gray-400"
                />
              )}
            </div>
            {errors.confirmPassword && (
              <p>{errors.confirmPassword.message?.toString()}</p>
            )}
          </div>
        )}
        <div
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {!isForgot && (
            <div style={{ flexDirection: "row" }}>
              <input id="check" type="checkbox" />
              <label style={{ fontSize: "14px" }} htmlFor="check">
                {isLogin
                  ? "Remember"
                  : "By continuing, i agree to the terms of use & privacy policy"}
              </label>
            </div>
          )}
          {isLogin && (
            <span
              onClick={() => setIsForgot((is) => !is)}
              className="cursor-pointer text-xs font-bold text-gray-400 border-b-2 transition-all border-gray-400 hover:text-gray-600 hover:border-gray-600"
            >
              {isForgot ? "Login your account" : "Forgot your password?"}
            </span>
          )}
        </div>
        <button>
          {isLogin ? (isForgot ? "Summit" : "Login") : "Create account"}
        </button>
        <p className="text-center text-sm text-gray-400 font-medium">
          {isLogin
            ? "Don't have an account yet? "
            : "Already have an account? "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
            }}
            className="cursor-pointer font-bold text-black border-b-2 border-black"
          >
            {isLogin ? "Sign up" : "Login here"}
          </span>
        </p>
      </form>
    </div>
  );
}
