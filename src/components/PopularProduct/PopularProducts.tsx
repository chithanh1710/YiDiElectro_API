import { SwiperSlide } from "swiper/react";
import { PopularProductItem } from "./PopularProductItem";
import SlideAnimation from "../Animations/SlideAnimation";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useGetCarByTypeQuery } from "../../rtk-query/carApi";

export function PopularProducts() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  const { data } = useGetCarByTypeQuery("popular");
  console.log(data);
  if (!data?.data) {
    return null;
  }
  return (
    <div className="container-width popularProducts">
      <h1 className="left-1/2 -translate-x-1/2 py-10 text-4xl inline-block font-medium relative">
        {lang === "English" ? "Popular Products" : "Sản phẩm nổi bật"}
        <div
          style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)" }}
          className="w-[8.7rem] -z-10 h-3 bg-yellow-400 absolute bottom-[2.6rem] right-0"
        ></div>
      </h1>
      <SlideAnimation>
        {data?.data.map((item) => (
          <SwiperSlide className="text-center w-[30rem]" key={item.name}>
            <PopularProductItem item={item} />
          </SwiperSlide>
        ))}
      </SlideAnimation>
    </div>
  );
}
