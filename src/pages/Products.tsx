import { NavProduct } from "../components/NavProduct/NavProduct";
import { ListFeatureLuxuryCar } from "../components/FeatureLuxuryCar/ListFeatureLuxuryCar";
import { SortByItem } from "../components/SortBy/SortByItem";
import { useSelector } from "react-redux";
import { storeProps } from "../store";
import { getDataPageProduct } from "./productSlide";
import { useGetFullCarQuery } from "../rtk-query/carApi";
import Err from "./Err";
import { IKContext, IKImage } from "imagekitio-react";

export default function Products() {
  const optionProduct = useSelector((store: storeProps) => store.product);
  const { data, isError } = useGetFullCarQuery("");
  if (isError) {
    return <Err />;
  }
  if (!data?.data) {
    return null;
  }
  return (
    <div className="w-full lg:px-12 px-6 py-32 bg-gray-800 text-white">
      <div className="max-w-[1300px] mx-auto">
        <BoxContent />
        <div className="sm:px-6 py-10">
          <SortByItem />
          <div className="flex sm:flex-row flex-col">
            <div className="sm:w-[240px] w-full h-full mb-6 flex-shrink-0">
              <NavProduct />
            </div>
            <div className="w-full sm:pl-6">
              <ListFeatureLuxuryCar
                data={getDataPageProduct(data.data, optionProduct)}
                logo="All"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BoxContent() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div className="bg-yellow-400 flex gap-4 justify-between px-10 py-8 items-center rounded-2xl">
      {lang === "English" ? (
        <div className="text-black">
          <h2 className="text-[max(2.1vw,20px)] font-semibold mb-4">
            Our Electric Vehicle Collection
          </h2>
          <p className="text-gray-700 text-[max(1.2vw,14px)]">
            Welcome to YiDIElectro's Electric Vehicle Collection! Explore our
            diverse range of electric vehicles designed to meet your
            transportation needs while promoting sustainability and innovation.
          </p>
        </div>
      ) : (
        <div className="text-black">
          <h2 className="text-[max(2.1vw,20px)] font-semibold mb-4">
            Bộ Sưu Tập Xe Điện Của Chúng Tôi
          </h2>
          <p className="text-gray-700 text-[max(1.2vw,14px)]">
            Chào mừng bạn đến với Bộ Sưu Tập Xe Điện của YiDIElectro! Khám phá
            loạt xe điện đa dạng của chúng tôi được thiết kế để đáp ứng nhu cầu
            vận chuyển của bạn trong khi thúc đẩy tính bền vững và sáng tạo.
          </p>
        </div>
      )}
      <IKContext
        publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
        urlEndpoint="https://ik.imagekit.io/yidiElectro"
        transformationPosition="path"
      >
        <IKImage
          path="/offer.png"
          loading="lazy"
          lqip={{ active: true, quality: 20, blur: 10 }}
          className="w-[max(34vw,260px)] md:block hidden"
        />
      </IKContext>
    </div>
  );
}
