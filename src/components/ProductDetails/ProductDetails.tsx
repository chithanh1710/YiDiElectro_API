import formatCurrency, {
  formatCurrencyVietnamese,
} from "../../utils/formatCurrency";
import { dataPopularProductsProps } from "../../data/interfaceDataCar";
import { useEffect, useState } from "react";
import exchangeRate from "../../utils/exchangePrice";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";

export function ProductDetails({
  isEnglish,
  data,
}: {
  isEnglish: boolean;
  data: dataPopularProductsProps;
}) {
  const lang = useSelector((store: storeProps) => store.app.lang);
  const [price, setPrice] = useState(data.price);
  useEffect(() => {
    exchangeRate(lang, data.price, setPrice);
  }, [lang, data.price]);
  useEffect(() => {
    document.title = data.name;

    return () => {
      document.title = "Electric Car, Solar & Clean Energy | YiDi-Electro";
    };
  }, [data.name]);
  return (
    <>
      <h2 className="text-gray-400 font-semibold text-2xl text-center">
        {isEnglish ? " Product Details" : "Thông tin chi tiết sản phẩm"}
      </h2>
      <div className="py-6 mt-6 px-4 border border-gray-700 rounded-xl">
        <h3 className="font-semibold text-4xl text-yellow-400">
          {data.brand} {data.name}
        </h3>
        <h3 className="font-semibold text-2xl mt-6">
          {isEnglish ? "Description:" : "Miêu tả:"}
        </h3>
        <p className="mt-3 text-gray-300">
          {isEnglish
            ? "This modern electric vehicle not only provides comfort and convenience on every journey but also contributes to environmental protection with a completely CO2 emissions-free operation system. With its sleek design and advanced technology, it's the ideal choice for those who crave the thrill of driving while caring for our planet's well-being."
            : "Chiếc xe điện hiện đại này không chỉ mang lại sự thoải mái và tiện ích trong mỗi chuyến đi, mà còn đóng góp vào việc bảo vệ môi trường với hệ thống vận hành hoàn toàn không thải ra khí CO2. Với thiết kế đẹp mắt và công nghệ tiên tiến, nó là sự lựa chọn lý tưởng cho những người đam mê cảm giác lái xe mới mẻ và đồng thời quan tâm đến việc bảo vệ hành tinh của chúng ta."}
        </p>
        <h3 className="font-semibold text-2xl mt-6">
          {isEnglish ? "Specifications: :" : "Thông số kĩ thuật:"}
        </h3>
        {isEnglish ? (
          <ul className="list-disc ml-4 space-y-2 mt-4 font-semibold text-gray-300">
            <li>
              Dimensions:{" "}
              <span className="font-normal">
                Length: 4.5 meters, Width: 1.8 meters, Height: 1.5 meters
              </span>
            </li>
            <li>
              Weight: <span className="font-normal">1.500 kilograms</span>
            </li>
            <li>
              Color: <span className="font-normal">Silver</span>
            </li>
            <li>
              Material: <span className="font-normal">Aluminum alloy body</span>
            </li>
          </ul>
        ) : (
          <ul className="list-disc ml-4 space-y-2 mt-4 font-semibold text-gray-300">
            <li>
              Kích thước:{" "}
              <span className="font-normal">
                Dài: 4.5 mét, Rộng: 1.8 mét, Cao: 1.5 mét
              </span>
            </li>
            <li>
              Trọng lượng: <span className="font-normal">1.500 kilogram</span>
            </li>
            <li>
              Màu sắc: <span className="font-normal">Bạc</span>
            </li>
            <li>
              Chất liệu:{" "}
              <span className="font-normal">Thân xe hợp kim nhôm</span>
            </li>
          </ul>
        )}
        {isEnglish ? (
          <>
            <h3 className="font-semibold text-2xl mt-6">Features:</h3>
            <ul className="list-disc ml-4 space-y-2 mt-4 text-gray-300">
              <li>Zero emissions</li>
              <li>Quick charging capabilities</li>
              <li>Spacious interior with comfortable seating</li>
              <li>
                Advanced safety features including collision avoidance and lane
                departure warning
              </li>
              <li>
                Integrated touchscreen display with navigation and entertainment
                options
              </li>
            </ul>
            <h3 className="font-semibold text-2xl mt-6">
              Additional Information:
            </h3>
            <ul className="list-disc ml-4 space-y-2 mt-4 font-semibold text-gray-300">
              <li>
                Shipping Policy:{" "}
                <span className="font-normal">
                  Free shipping available nationwide.
                </span>
              </li>
              <li>
                Return Policy:{" "}
                <span className="font-normal">
                  30-day money-back guarantee if you're not completely
                  satisfied.
                </span>
              </li>
              <li>
                Warranty:{" "}
                <span className="font-normal">
                  Comprehensive warranty coverage for peace of mind.
                </span>
              </li>
              <li>
                Contact Us:{" "}
                <span className="font-normal">
                  For inquiries or assistance, please contact our customer
                  service team at yidi@gmail.com or call us at 09123456789
                </span>
              </li>
            </ul>
          </>
        ) : (
          <>
            <h3 className="font-semibold text-2xl mt-6">Đặc Điểm:</h3>
            <ul className="list-disc ml-4 space-y-2 mt-4 text-gray-300">
              <li>Không phát thải</li>
              <li>Khả năng sạc nhanh</li>
              <li>Nội thất rộng rãi với ghế ngồi thoải mái</li>
              <li>
                Các tính năng an toàn tiên tiến bao gồm tránh va chạm và cảnh
                báo rời làn đường
              </li>
              <li>
                Màn hình cảm ứng tích hợp với các tùy chọn điều hướng và giải
                trí
              </li>
            </ul>
            <h3 className="font-semibold text-2xl mt-6">Thông Tin Bổ Sung:</h3>
            <ul className="list-disc ml-4 space-y-2 mt-4 font-semibold text-gray-300">
              <li>
                Chính Sách Giao Hàng:{" "}
                <span className="font-normal">
                  Miễn phí giao hàng trên toàn quốc.
                </span>
              </li>
              <li>
                Chính Sách Đổi Trả:{" "}
                <span className="font-normal">
                  Bảo đảm hoàn tiền trong vòng 30 ngày nếu bạn không hoàn toàn
                  hài lòng.
                </span>
              </li>
              <li>
                Bảo Hành:{" "}
                <span className="font-normal">
                  Phạm vi bảo hành toàn diện để bạn yên tâm.
                </span>
              </li>
              <li>
                Liên Hệ:{" "}
                <span className="font-normal">
                  Để biết thêm thông tin hoặc hỗ trợ, vui lòng liên hệ đội ngũ
                  dịch vụ khách hàng của chúng tôi qua địa chỉ email
                  yidi@gmail.com hoặc gọi số 09123456789
                </span>
              </li>
            </ul>
          </>
        )}
      </div>
      <h3 className="font-semibold text-4xl mt-12 text-yellow-400">
        {isEnglish
          ? `Price: $${formatCurrency(data.price)}`
          : `Giá: ${formatCurrencyVietnamese(price)}₫`}
      </h3>
    </>
  );
}
