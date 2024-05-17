import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storeProps } from "../../store";

export function NavList() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  const lang = useSelector((store: storeProps) => store.app.lang);
  const isEnglish = lang === "English";
  return (
    <ul className="md:flex justify-start items-center lg:gap-16 md:gap-8 hidden text-lg">
      <li>
        <Link
          onClick={handleScrollToTop}
          className={`${
            window.location.pathname === "/app"
              ? "text-yellow-400 font-semibold"
              : ""
          }`}
          to="/app"
        >
          {isEnglish ? "Home" : "Trang chủ"}
        </Link>
      </li>
      <li>
        <Link
          onClick={handleScrollToTop}
          className={`${
            window.location.pathname.includes("/products")
              ? "text-yellow-400 font-semibold"
              : ""
          }`}
          to="products"
        >
          {isEnglish ? "Products" : "Sản phẩm"}
        </Link>
      </li>
      <li>
        <Link
          onClick={handleScrollToTop}
          className={`${
            window.location.pathname === "/app/about"
              ? "text-yellow-400 font-semibold"
              : ""
          }`}
          to="about"
        >
          {isEnglish ? "About" : "Giới thiệu"}
        </Link>
      </li>
      <li>
        <Link
          onClick={handleScrollToTop}
          className={`${
            window.location.pathname === "/app/contact"
              ? "text-yellow-400 font-semibold"
              : ""
          }`}
          to="contact"
        >
          {isEnglish ? "Contact" : "Liên hệ"}
        </Link>
      </li>
    </ul>
  );
}
