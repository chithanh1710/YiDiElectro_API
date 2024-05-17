import { Circle } from "lucide-react";
import { dataPopularProductsProps } from "../../data/interfaceDataCar";
import formatCurrency, {
  formatCurrencyVietnamese,
} from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useEffect, useState } from "react";
import exchangeRate from "../../utils/exchangePrice";
import { IKContext, IKImage } from "imagekitio-react";

export function PopularProductItem({
  item,
}: {
  item: dataPopularProductsProps;
}) {
  const navigate = useNavigate();
  const lang = useSelector((store: storeProps) => store.app.lang);
  const [price, setPrice] = useState(item.price);

  useEffect(() => {
    exchangeRate(lang, item.price, setPrice);
  }, [lang, item.price]);

  return (
    <>
      <IKContext
        publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
        urlEndpoint="https://ik.imagekit.io/yidiElectro"
        transformationPosition="path"
      >
        <IKImage
          path={item.img}
          loading="lazy"
          lqip={{ active: true, quality: 20, blur: 10 }}
          className="image md:h-[max(12vw)] h-[30vw] w-auto transition-all duration-700 opacity-50 scale-75 mx-auto"
        />
      </IKContext>
      <div className="content pt-[1rem] opacity-0 scale-[0.25] transition-all duration-700">
        <h3 className="text-lg font-medium">{item.name}</h3>
        <div className="text-3xl py-[1rem] px-0 font-bold text-yellow-400">
          <span className="font-medium text-black text-[1.7rem]">
            {lang === "English" ? "Price: " : "Giá: "}
          </span>
          {lang === "English"
            ? `$${formatCurrency(item.price)}`
            : `${formatCurrencyVietnamese(price)}₫`}
        </div>
        <div className="text-lg p-4 pt-6 border-t-2 flex items-center justify-center gap-5 flex-wrap">
          <p className=" flex gap-2 items-center">
            <Circle className="text-yellow-400 fill-current h-3 w-3 self-end mb-2" />
            <span className="">{item.year}</span>
          </p>
          <p className=" flex gap-2 items-center">
            <Circle className="text-yellow-400 fill-current h-3 w-3 self-end mb-2" />
            <span className="">
              {lang === "English" ? item.mode : "Tự động"}
            </span>
          </p>
          <p className=" flex gap-2 items-center">
            <Circle className="text-yellow-400 fill-current h-3 w-3 self-end mb-2" />
            <span className="">
              {lang === "English" ? item.energy : "Xe điện"}
            </span>
          </p>
          <p className=" flex gap-2 items-center">
            <Circle className="text-yellow-400 fill-current h-3 w-3 self-end mb-2" />
            <span className="">{item.km}km</span>
          </p>
        </div>
        <button
          onClick={() => {
            navigate(`products/${item.name}`);
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="py-2 px-4 bg-yellow-400 rounded-lg font-medium text-xl transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
        >
          {lang === "English" ? "View Details" : "Xem chi tiết"}
        </button>
      </div>
    </>
  );
}
