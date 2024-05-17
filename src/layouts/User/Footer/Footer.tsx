import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../../components/Logo/Logo";
import { useSelector } from "react-redux";
import { storeProps } from "../../../store";

export default function Footer() {
  const navigate = useNavigate();
  const lang = useSelector((store: storeProps) => store.app.lang);
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div
      style={{ paddingBottom: "0" }}
      className="container-width border-b-8 border-yellow-400"
    >
      <div className="flex py-12 md:flex-row flex-col md:justify-between max-md:gap-10">
        <div className="md:w-[40%] md:px-4">
          <div
            onClick={() => {
              navigate("/app");
              handleScrollToTop();
            }}
            className="flex gap-4 text-black cursor-pointer items-center justify-start"
          >
            <Logo />
          </div>
          <p className="mt-4 text-gray-600">
            {lang === "English"
              ? "We offer the best electric cars of the most recognized brands in the word"
              : "Chúng tôi cung cấp những chiếc xe điện tốt nhất của các thương hiệu được công nhận nhất trên thế giới."}
          </p>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">
            {lang === "English" ? "Company" : "Doanh nghiệp"}
          </h2>
          <Link
            onClick={handleScrollToTop}
            to="/app"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            {lang === "English" ? "Home" : "Trang chủ"}
          </Link>
          <Link
            onClick={handleScrollToTop}
            to="products"
            className={`flex justify-between items-center ${
              window.location.pathname.includes("products")
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            {lang === "English" ? "Products" : "Sản phẩm"}
          </Link>
          <Link
            onClick={handleScrollToTop}
            to="products"
            className="flex justify-between items-center"
          >
            <span>{lang === "English" ? "Shop" : "Cửa hàng"}</span>
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-2xl mb-4">
            {lang === "English" ? "Information" : "Thông tin"}
          </h2>
          <Link
            onClick={handleScrollToTop}
            to="about"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app/about"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            {lang === "English" ? "About" : "Giới thiệu"}
          </Link>
          <Link
            onClick={handleScrollToTop}
            to="contact"
            className={`flex justify-between items-center ${
              window.location.pathname === "/app/contact"
                ? "text-yellow-400 font-semibold"
                : ""
            }`}
          >
            {lang === "English" ? "Contact" : "Liên hệ"}
          </Link>
          <Link onClick={handleScrollToTop} to="#">
            <span> {lang === "English" ? "Support" : "Hỗ trợ"}</span>
          </Link>
        </div>
        <div>
          <h2 className="font-bold text-2xl">
            {lang === "English" ? "Follow us" : "Theo dõi chúng tôi"}
          </h2>
          <div className="flex justify-start items-center mt-4 gap-4">
            <a target="_blank" href="https://twitter.com/reactjs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10"
              >
                <path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://www.instagram.com/cthanh_yi/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10"
              >
                <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
              </svg>
            </a>
            <a target="_blank" href="https://www.facebook.com/Ch.Thanh04">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-10 w-10"
              >
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 mb-4">
        Copyright &copy; <strong>YiDi</strong> All rights reserver
      </p>
    </div>
  );
}
