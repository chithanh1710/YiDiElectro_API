import { ArrowLeft } from "lucide-react";
import { listIcon } from "../assets/assets";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../layouts/Admin/AdminSlice";

export default function LoginAdmin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accountADMIN = "admin123";
  const passADMIN = "admin123";
  const [account, setAccount] = useState("");
  const [pass, setPass] = useState("");
  const isLogin = sessionStorage.getItem("adminLogin");

  if (isLogin === "true") {
    return <Navigate to="/admin/dashboard" replace />;
  } else {
    return (
      <div className="flex min-h-screen p-6 justify-center items-center bg-red-800">
        <div className="flex h-[560px] w-[800px] bg-white rounded-2xl overflow-hidden">
          <div className="w-[40%] p-6 max-sm:w-full">
            <button
              onClick={() => {
                navigate("/admin");
              }}
              className="p-1 bg-gray-100 text-red-400"
            >
              <ArrowLeft />
            </button>
            <div className="mt-16 flex flex-col justify-center items-center">
              <img className="h-16" src={listIcon.Tesla_T_symbol} alt="" />
              <h3 className="mt-6 font-medium text-2xl">Welcome Back!</h3>
              <p className="text-gray-600 text-[10px]">
                Please Sign In to continue
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (account === accountADMIN && pass === passADMIN) {
                  dispatch(login());
                  navigate("/admin/dashboard", { replace: true });
                }
              }}
              className="mt-6 flex flex-col"
              action=""
            >
              <label className="text-sm font-medium" htmlFor="AdAccount">
                Account
              </label>
              <input
                className="outline-red-500 mt-1 mb-3 bg-gray-50 border-2 rounded-md px-2 py-1 border-gray-300"
                type="text"
                name=""
                required
                id="AdAccount"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                placeholder="admin123"
              />
              <label className="text-sm font-medium" htmlFor="AdPass">
                Password
              </label>
              <input
                className="outline-red-500 mt-1 mb-3 bg-gray-50 border-2 rounded-md px-2 py-1 border-gray-300"
                type="password"
                id="AdPass"
                required
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="******"
              />
              <div className="flex gap-1">
                <input type="checkbox" id="AdRemember" />
                <label htmlFor="AdRemember">Remember</label>
              </div>
              <button className="bg-red-500 text-xl font-medium py-2 rounded-md text-white mt-6">
                Login
              </button>
            </form>
          </div>
          <div className="w-[60%] bg-gray-100 flex justify-center items-center max-sm:hidden">
            <img
              className="w-[80%] h-auto"
              src="https://ik.imagekit.io/yidiElectro/login.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
