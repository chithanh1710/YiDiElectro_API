import { Link } from "react-router-dom";

export function Logo() {
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <Link
      onClick={handleScrollToTop}
      to="/app"
      className="font-bold text-3xl tracking-wider cursor-pointer flex gap-2"
      translate="no"
    >
      YiDi-Electro
    </Link>
  );
}
