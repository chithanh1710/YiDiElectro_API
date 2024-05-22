import { useNavigate, useParams } from "react-router-dom";
import { Clock2, Thermometer } from "lucide-react";
import { ListFeatureLuxuryCar } from "../components/FeatureLuxuryCar/ListFeatureLuxuryCar";
import { useSelector } from "react-redux";
import { storeProps } from "../store";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import { IKContext, IKImage } from "imagekitio-react";
import { useGetFullCarQuery } from "../rtk-query/carApi";
import Err from "./Err";

export default function ProductId() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  const { data: dataCar, isError } = useGetFullCarQuery("");
  if (!dataCar?.data) {
    return null;
  }
  if (isError) {
    return <Err />;
  }
  const findId = dataCar.data.findIndex((item) => item.name === id);
  const data = dataCar.data[findId];
  const listData = dataCar.data.filter((_, i) => i !== findId);

  function handleCheckout() {
    navigate("checkout");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white">
      <div className="max-w-[1300px] mx-auto">
        <h1 className="text-[max(3vw,20px)] text-center">
          <span className="text-yellow-400 font-semibold">{data.brand} </span>
          <span>{data.name}</span>
        </h1>
        <div className="flex justify-center items-center text-gray-300 gap-1">
          <span className="text-blue-600 w-4 h-4">
            <Bolt />
          </span>
          {isEnglish ? "Electric car" : "Xe điện"}
        </div>
        <div className="mt-10 flex justify-center relative">
          <IKContext
            publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
            urlEndpoint="https://ik.imagekit.io/yidiElectro"
            transformationPosition="path"
          >
            <IKImage path={data.img} />
          </IKContext>
        </div>
        <div className="mt-5 flex justify-between max-w-[500px] mx-auto">
          <div className="flex flex-col gap-1 justify-between items-center">
            <Thermometer />
            <p className="text-xl font-semibold tracking-wider mt-3">24°</p>
            <p className="text-sm text-gray-300 font-light opacity-50">
              {isEnglish ? "Temperature" : "Nhiệt độ"}
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-between items-center">
            <Clock2 />
            <p className="text-xl font-semibold tracking-wider mt-3">
              {data.km}km
            </p>
            <p className="text-sm text-gray-300 font-light opacity-50">
              {isEnglish ? "Speed" : "Tốc độ"}
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-between items-center">
            <span className="w-5 h-5">
              <Bolt />
            </span>
            <p className="text-xl font-semibold tracking-wider mt-3">100%</p>
            <p className="text-sm text-gray-300 font-light opacity-50">
              {isEnglish ? "Battery" : "Năng lượng"}
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-24">
          <div
            onClick={handleCheckout}
            className="border-yellow-400 border-2 p-4 rounded-full inline-block bg-gray-900 shadowAnimation"
          >
            <button className="border-yellow-400 rounded-full border w-28 h-28 font-semibold tracking-wide uppercase text-sm  ">
              {isEnglish ? "Check out" : "Thanh toán"}
            </button>
          </div>
        </div>
        <div className="mt-24">
          <ProductDetails isEnglish={isEnglish} data={data} />
          <button
            onClick={handleCheckout}
            className="mt-6 py-2 px-4 text-black bg-yellow-400 rounded-lg font-medium text-xl transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
          >
            {isEnglish ? "Buy Now" : "Mua ngay"}
          </button>
          <button
            onClick={() => {
              navigate("/app/contact");
            }}
            className="ml-3 mt-6 py-2 px-4 text-yellow-400 border border-yellow-400 rounded-lg font-medium text-xl transition-all duration-300 hover:shadow-lg hover:bg-yellow-400 hover:text-black hover:-translate-y-1 hover:scale-105"
          >
            {isEnglish ? "Contact Us" : "Liên hệ chúng tôi"}
          </button>
        </div>
        <div className="mt-24">
          <h2 className="text-gray-400 font-semibold text-2xl text-center mb-6">
            {isEnglish ? "Related Products" : "Những sản phẩm tương tự"}
          </h2>
          <ListFeatureLuxuryCar data={listData} logo="All" />
        </div>
      </div>
    </div>
  );
}

function Bolt() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
