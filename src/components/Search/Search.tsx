import { useState } from "react";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { Link } from "react-router-dom";
import { useGetFullCarQuery } from "../../services/carApi";

export function Search() {
  const [search, setSearch] = useState("");
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  const { data } = useGetFullCarQuery("");
  if (!data?.data) {
    return null;
  }
  return (
    <div className="absolute top-[110%] left-6 lg:left-12 text-white bg-black/80 rounded-md">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="px-4 py-2 bg-transparent placeholder:text-gray-600 outline-none"
        placeholder={isEnglish ? "Search..." : "Tìm kiếm..."}
      />
      <ul
        className={`px-4 py-2 ${
          data.data.filter(
            (car) =>
              car.name.toLowerCase().includes(search.toLowerCase()) &&
              search !== ""
          ).length === 0
            ? "hidden"
            : "border-t border-t-gray-600"
        }`}
      >
        {data.data.map(
          (car) =>
            car.name.toLowerCase().includes(search.toLowerCase()) &&
            search !== "" && (
              <li key={car.name} className="cursor-pointer">
                <Link
                  onClick={() => {
                    setSearch("");
                    window.scrollTo({ behavior: "smooth", top: 0, left: 0 });
                  }}
                  to={`/app/products/${car.name}`}
                >
                  {car.name}
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
