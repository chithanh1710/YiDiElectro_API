import SlideAnimation from "../Animations/SlideAnimation";
import { SwiperSlide } from "swiper/react";
import dataClientReview from "../../data/dataClientReview";
import { ClientReviewsItem } from "./ClientReviewsItem";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";

export function ClientReviews() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div className="container-width ClientReviews mb-10  ">
      <h1 className="left-1/2 -translate-x-1/2 py-10 text-4xl inline-block font-medium relative">
        {lang === "English" ? "Client Reviews" : "Đánh giá từ khách hàng"}
        <div
          style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)" }}
          className="w-[8.7rem] -z-10 h-3 bg-yellow-400 absolute bottom-[2.6rem] right-0"
        ></div>
      </h1>
      <SlideAnimation>
        {dataClientReview.map((item) => (
          <SwiperSlide className="text-center w-[30rem]" key={item.name}>
            <ClientReviewsItem item={item} />
          </SwiperSlide>
        ))}
      </SlideAnimation>
    </div>
  );
}
