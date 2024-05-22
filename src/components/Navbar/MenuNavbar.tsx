import { ChevronRight, CircleUserRound, Globe, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { listIcon } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { storeProps } from "../../store";
import { setIsLoggedFalse, setLang } from "../../layouts/User/AppSlice";

export function MenuNavbar({
  setIsMenu,
}: {
  setIsMenu: (value: React.SetStateAction<boolean>) => void;
}) {
  const navigate = useNavigate();
  const lang = useSelector((store: storeProps) => store.app.lang);
  const isLogged = useSelector((store: storeProps) => store.app.isLogged);
  const isEnglish = lang === "English";
  const dispatch = useDispatch();

  return (
    <>
      <div className="md:hidden flex justify-end fixed z-50 right-0 pr-6 mx-4 w-full h-16 bg-white">
        <button
          onClick={() => setIsMenu((prev) => !prev)}
          className="text-black"
        >
          <X />
        </button>
      </div>
      <div className="text-black md:hidden text-xl block py-16 px-10 bg-white absolute left-0 z-30 inset-0 overflow-y-scroll h-screen">
        <ul className="menu flex flex-col gap-4">
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="/app"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            <span>{isEnglish ? "Home" : "Trang chủ"}</span>
            <ChevronRight />
          </Link>
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="products"
            className={`flex justify-between items-center ${
              window.location.pathname.includes("products")
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            <span>{isEnglish ? "Products" : "Sản phẩm"}</span>
            <ChevronRight />
          </Link>
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="about"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app/about"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            <span>{isEnglish ? "About" : "Giới thiệu"}</span>
            <ChevronRight />
          </Link>
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="contact"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app/contact"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            <span>{isEnglish ? "Contact" : "Liên hệ"}</span>
            <ChevronRight />
          </Link>
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="products"
            className="flex justify-between items-center"
          >
            <span>{isEnglish ? "Shop" : "Cửa hàng"}</span>
          </Link>
          <Link
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            to="contact"
          >
            <span>{isEnglish ? "Support" : "Hỗ trợ"}</span>
          </Link>
          <div className="flex justify-between items-center ml-3">
            <div className="flex gap-4 items-start">
              <Globe />
              <div className="text-start">
                <h3 style={{ lineHeight: "1" }}>
                  {lang === "English" ? "United States" : "Việt Nam"}
                </h3>
                <select
                  onChange={(e) => {
                    dispatch(setLang(e.target.value));
                  }}
                  value={lang}
                  className="text-gray-500 text-[16px]"
                >
                  <option value="English">English</option>
                  <option value="Vietnamese">Vietnamese</option>
                </select>
              </div>
            </div>
          </div>
          {!isLogged ? (
            <Link
              onClick={() => {
                setIsMenu(false);
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              to="login"
              className="flex gap-4 mb-6"
            >
              <CircleUserRound />
              <h3 style={{ lineHeight: "1" }}>
                {isEnglish ? "Account" : "Tài khoản"}
              </h3>
            </Link>
          ) : (
            <button
              onClick={() => {
                dispatch(setIsLoggedFalse());
              }}
              className="px-6 py-3 bg-yellow-400 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
            >
              Logout
            </button>
          )}
          <div
            onClick={() => {
              setIsMenu(false);
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              navigate("/app");
            }}
            className="flex gap-4 text-red-500 cursor-pointer items-center justify-center"
          >
            <img className="h-10 w-10" src={listIcon.Tesla_T_symbol} alt="" />
            <Logo />
          </div>
        </ul>
      </div>
    </>
  );
}
