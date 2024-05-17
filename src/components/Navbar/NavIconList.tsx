import { CircleHelp, CircleUserRound, Globe } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLoggedFalse, setLang } from "../../layouts/User/AppSlice";
import { storeProps } from "../../store";

export function NavIconList() {
  const navigate = useNavigate();
  const [isClickGlobe, setIsClickGlobe] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();
  const lang = useSelector((store: storeProps) => store.app.lang);
  const isLogged = useSelector((store: storeProps) => store.app.isLogged);

  return (
    <div className="md:flex hidden items-center lg:gap-6 md:gap-4">
      <CircleHelp
        onClick={() => {
          navigate("contact");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="h-6 w-6 cursor-pointer"
      />
      <div className="relative">
        <Globe
          onClick={() => setIsClickGlobe((prev) => !prev)}
          className="h-6 w-6 cursor-pointer"
        />
        <select
          onChange={(e) => {
            dispatch(setLang(e.target.value));
          }}
          value={lang}
          className={`absolute text-black rounded-md px-2 py-1 top-[150%] left-1/2 -translate-x-1/2 ${
            isClickGlobe ? "block" : "hidden"
          }`}
        >
          <option value="English">English</option>
          <option value="Vietnamese">Vietnamese</option>
        </select>
      </div>
      {isLogged ? (
        <div className="h-10 w-10 p-1 bg-yellow-400 cursor-pointer rounded-full relative">
          <img
            onClick={() => {
              setShowLogout((prev) => !prev);
            }}
            className="h-full w-full object-cover rounded-full"
            src="https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />

          <button
            onClick={() => {
              dispatch(setIsLoggedFalse());
            }}
            className={`absolute mt-1 top-[100%] left-1/2 -translate-x-1/2 px-2 rounded-md font-medium py-1 bg-white text-black ${
              !showLogout && "hidden"
            }`}
          >
            {lang === "English" ? "Logout" : "Thoát"}
          </button>
        </div>
      ) : (
        <CircleUserRound
          onClick={() => {
            navigate("login");
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="h-6 w-6 cursor-pointer"
        />
      )}
    </div>
  );
}
