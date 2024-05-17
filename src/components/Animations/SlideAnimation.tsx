import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function SlideAnimation({ children }: { children: ReactNode }) {
  return (
    <div className="swiper-container w-full overflow-x-hidden">
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slidesPerView={1}
        spaceBetween={20}
        grabCursor
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        centeredSlides
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ paddingBottom: "2rem" }}
      >
        {children}
      </Swiper>
    </div>
  );
}
