import SlideAnimation from "../Animations/SlideAnimation";
import { SwiperSlide } from "swiper/react";
import { ClientReviewsItem } from "./ClientReviewsItem";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useGetFullUserQuery } from "../../services/carApi";
import { SkeletonCRV } from "./SkeletonCRV";

export function ClientReviews() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  const { data, isLoading, isError } = useGetFullUserQuery("");

  const dataClientReview = data?.data || [];

  if (isError) {
    throw new Error("Err 404 💥");
  }

  return (
    <div className="container-width ClientReviews mb-10  ">
      <h1 className="left-1/2 -translate-x-1/2 py-10 text-4xl inline-block font-medium relative">
        {lang === "English" ? "Client Reviews" : "Đánh giá từ khách hàng"}
        <div
          style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)" }}
          className="w-[8.7rem] -z-10 h-3 bg-yellow-400 absolute bottom-[2.6rem] right-0"
        ></div>
      </h1>
      {!isLoading ? (
        <SlideAnimation>
          {dataClientReview.map((item) => (
            <SwiperSlide className="text-center w-[30rem]" key={item.name}>
              <ClientReviewsItem item={item} />
            </SwiperSlide>
          ))}
        </SlideAnimation>
      ) : (
        <SlideAnimation>
          {Array.from({ length: 5 }).map((_, i) => (
            <SwiperSlide key={i}>
              <SkeletonCRV />
            </SwiperSlide>
          ))}
        </SlideAnimation>
      )}
    </div>
  );
}
