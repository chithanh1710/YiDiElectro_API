import { Archive } from "lucide-react";
import formatCurrency, {
  formatCurrencyVietnamese,
} from "../../utils/formatCurrency";
import { dataPopularProductsProps } from "../../interface/interfaceDataCar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import exchangeRate from "../../utils/exchangePrice";
import { IKImage } from "imagekitio-react";

export function ItemFeatureLuxuryCar({
  setStyle,
  item,
}: {
  setStyle: string;
  item: dataPopularProductsProps;
}) {
  const navigate = useNavigate();
  const lang = useSelector((store: storeProps) => store.app.lang);
  const [price, setPrice] = useState(item.price);
  useEffect(() => {
    exchangeRate(lang, item.price, setPrice);
  }, [lang, item.price]);
  return (
    <div
      onClick={() => {
        navigate(`/app/products/${item.name}`);
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }}
      className={`ItemFeatureLuxuryCar cursor-pointer flex flex-col relative p-3 rounded-2xl bg-gray-700 w-full h-full text-white ${setStyle}`}
    >
      <h2 className="font-medium text-2xl">{item.brand}</h2>
      <p className="text-sm text-gray-300">{item.name}</p>
      <IKImage path={item.img} className="w-[80%] mx-auto my-6" />
      <p className=" mt-auto font-bold text-2xl">
        {lang === "English"
          ? `$${formatCurrency(item.price)}`
          : `${formatCurrencyVietnamese(price)}₫`}
      </p>
      <button className="absolute right-0 bottom-0 p-3 bg-blue-600 rounded-tl-2xl rounded-br-2xl">
        <Archive className="h-6 w-6" />
      </button>
    </div>
  );
}
