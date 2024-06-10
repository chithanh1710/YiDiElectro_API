import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import formatCurrency, {
  formatCurrencyVietnamese,
} from "../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { setIsSubmit, setName } from "../layouts/User/AppSlice";
import { storeProps } from "../store";
import { ProductDetails } from "../components/ProductDetails/ProductDetails";
import exchangeRate from "../utils/exchangePrice";
import { IKImage } from "imagekitio-react";
import { useGetFullCarQuery } from "../services/carApi";
import Err from "./Err";

export default function CheckOut() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isClickSaveCard, setIsClickSaveCard] = useState(false);
  const [card, setCard] = useState(0);
  const [newName, setNewName] = useState("");
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  const lang = useSelector((store: storeProps) => store.app.lang);

  const { data: dataCar, isError } = useGetFullCarQuery("");

  const findId = dataCar?.data.findIndex((item) => item.name === id) || 0;
  const data = dataCar?.data[findId] || {
    brand: "Porsche",
    name: "Darkar",
    price: "346900",
    priceRange: "$300.000 - $399.999",
    img: "popular1.png",
    year: 2024,
    energy: "Electric",
    km: 360,
    mode: "Automatic",
    productType: "Sport",
  };

  const [price, setPrice] = useState(data.price);

  useEffect(() => {
    exchangeRate(lang, data.price, setPrice);
  }, [lang, data.price]);

  function handleSummit() {
    navigate("/app");
    dispatch(setName(newName));
    dispatch(setIsSubmit());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (isError) {
    return <Err />;
  }

  return (
    <div className="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white">
      <div className="max-w-[1300px] mx-auto flex lg:flex-row flex-col rounded-xl overflow-hidden text-gray-700 font-semibold">
        <form
          onSubmit={handleSummit}
          className="lg:min-w-[400px] w-full bg-gray-200 px-4 py-6"
        >
          <h2>{isEnglish ? "Card Details" : "Loại thẻ"}</h2>
          <div className="flex gap-4 justify-start mt-2">
            <IKImage
              onClick={() => setCard(0)}
              path="masterCard.png"
              className={`cursor-pointer lg:h-20 lg:w-auto sm:w-[120px] sm:h-[100px] transition-all duration-300 h-16 w-auto p-2 rounded-md border-2  ${
                card === 0
                  ? "bg-gray-400 border-yellow-400 shadow-md -translate-y-1 scale-105"
                  : "bg-white border-gray-400"
              }`}
            />
            <IKImage
              onClick={() => setCard(1)}
              path="paypal.png"
              className={`cursor-pointer lg:h-20 lg:w-auto sm:w-[120px] sm:h-[100px] transition-all duration-300 h-16 w-auto p-2 rounded-md border-2  ${
                card === 1
                  ? "bg-gray-400 border-yellow-400 shadow-md -translate-y-1 scale-105"
                  : "bg-white border-gray-400"
              }`}
            />
            <IKImage
              onClick={() => setCard(2)}
              path="visa.png"
              className={`cursor-pointer lg:h-20 lg:w-auto sm:w-[120px] sm:h-[100px] transition-all duration-300 h-16 w-auto p-2 rounded-md border-2  ${
                card === 2
                  ? "bg-gray-400 border-yellow-400 shadow-md -translate-y-1 scale-105"
                  : "bg-white border-gray-400"
              }`}
            />
            <IKImage
              onClick={() => setCard(3)}
              path="bkash.png"
              className={`cursor-pointer lg:h-20 lg:w-24 sm:w-[120px] sm:h-[100px] transition-all duration-300 h-16 w-auto p-2 rounded-md border-2  ${
                card === 3
                  ? "bg-gray-400 border-yellow-400 shadow-md -translate-y-1 scale-105"
                  : "bg-white border-gray-400"
              }`}
            />
          </div>
          <h2 className="mt-4">
            {isEnglish ? "Name on Card" : "Tên trên thẻ"}
          </h2>
          <input
            type="text"
            className="px-4 py-2 mt-2 w-full rounded"
            placeholder="Chi Thanh"
            required
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
          <h2 className="mt-4"> {isEnglish ? "Card Number" : "Số thẻ"}</h2>
          <input
            type="text"
            className="px-4 py-2 mt-2 w-full rounded "
            placeholder="123456789"
            required
          />
          <div className="flex w-full gap-4 mt-4">
            <div className="w-[50%]">
              <h2>{isEnglish ? "Expiration Date" : "Ngày hết hạn"}</h2>
              <input
                className="w-full mt-2 px-4 py-2 rounded"
                type="text"
                placeholder="04/24"
                required
              />
            </div>
            <div className="w-[50%]">
              <h2>CVV</h2>
              <input
                className="w-full mt-2 px-4 py-2 rounded"
                type="text"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <p>
              {isEnglish
                ? "Save Card Data For Future Payments"
                : "Lưu dữ liệu thẻ để thanh toán trong tương lai"}
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsClickSaveCard((prev) => !prev);
              }}
              className={`w-10 rounded-full h-4 my-auto transition-all duration-700 bg-gray-100 relative border ${
                isClickSaveCard ? "border-green-400" : "border-black"
              } `}
            >
              <div
                className={`h-3 w-3 transition-all duration-500 rounded-full bg-black absolute mt-[1px] ml-[1px] top-0 left-0 ${
                  isClickSaveCard
                    ? "translate-x-6 bg-green-400"
                    : "translate-x-0"
                }`}
              ></div>
            </button>
          </div>
          <div className="mt-6 border-t-2 border-gray-300">
            <div className="flex justify-between mt-2">
              <p>{isEnglish ? "Subtotal" : "Tổng phụ"}</p>
              <p>
                {isEnglish
                  ? `$${formatCurrency(data.price)}`
                  : `${formatCurrencyVietnamese(price)}₫`}
              </p>
            </div>
            <div className="flex justify-between mt-2">
              <p>{isEnglish ? "Shipping" : "Vận chuyển"}</p>
              <p>
                {isEnglish
                  ? `$${formatCurrency((Number(data.price) * 0.01).toString())}`
                  : `${formatCurrencyVietnamese(
                      (Number(price) * 0.01).toFixed(0)
                    )}₫`}
              </p>
            </div>
          </div>
          <div className="mt-2 border-t-2 border-gray-300">
            <div className="flex justify-between mt-2">
              <p>{isEnglish ? "Total Amount" : "Tổng cộng"}</p>
              <p>
                {isEnglish
                  ? `$${formatCurrency(
                      (
                        Number(data.price) +
                        Number(data.price) * 0.01
                      ).toString()
                    )}`
                  : `${formatCurrencyVietnamese(
                      (Number(price) + Number(price) * 0.01).toFixed(0)
                    )}₫`}
              </p>
            </div>
          </div>
          <button className="bg-yellow-400 font-bold px-6 py-3 rounded-lg w-full mt-6 transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1">
            {isEnglish ? "Confirm Payment" : "Xác nhận thanh toán"}
          </button>
        </form>

        <div className="w-full lg:max-h-[680px] h-full bg-gray-100 px-4 py-6 lg:overflow-y-scroll productDetailCheckout">
          <h2 className="text-yellow-400 font-bold text-4xl text-center">
            {data.brand} <span className="text-black">{data.name}</span>
          </h2>
          <div className="flex flex-wrap gap-4 justify-between mt-12 border-2 rounded-lg px-4 py-2 border-yellow-400">
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Mode" : "Chế độ"}
              </h3>
              <p>{lang === "English" ? data.mode : "Tự động"}</p>
            </div>
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Energy" : "Năng lượng"}
              </h3>
              <p>{lang === "English" ? data.energy : "Điện"}</p>
            </div>
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Speed" : "Tốc độ"}
              </h3>
              <p>{data.km}km</p>
            </div>
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Product type" : "Loại sản phẩm"}
              </h3>
              <p>
                {lang === "English"
                  ? data.productType
                  : data.productType === "Luxury"
                  ? "Sang trọng"
                  : data.productType === "Sports"
                  ? "Thể thao"
                  : "Gia đình"}
              </p>
            </div>
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Year" : "Năm"}
              </h3>
              <p>{data.year}</p>
            </div>
            <div>
              <h3 className="text-gray-400 font-light">
                {lang === "English" ? "Price" : "Giá"}
              </h3>
              <p>
                {isEnglish
                  ? `$${formatCurrency(
                      (
                        Number(data.price) +
                        Number(data.price) * 0.01
                      ).toString()
                    )}`
                  : `${formatCurrencyVietnamese(
                      (Number(price) + Number(price) * 0.01).toFixed(0)
                    )}₫`}
              </p>
            </div>
          </div>
          <IKImage path={data.img} className="mt-24 mx-auto" />
          <div className="mt-24 bg-gray-700 px-3 py-6 rounded-lg">
            <ProductDetails data={data} isEnglish={isEnglish} />
          </div>
        </div>
      </div>
    </div>
  );
}
