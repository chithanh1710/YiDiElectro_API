import { useSelector } from "react-redux";
import { nextNumDotAndSlide } from "../../pages/homeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeProps } from "../../store";
import { IKImage, IKVideo } from "imagekitio-react";

export default function Background() {
  const imgCur = useSelector((store: storeProps) => store.home.slide.img);
  const isPlayVideo = useSelector(
    (store: storeProps) => store.home.isPlayVideo
  );

  const dispatch = useDispatch();
  useEffect(() => {
    const nextSlide = setInterval(() => {
      dispatch(nextNumDotAndSlide());
    }, 5000);

    return () => clearInterval(nextSlide);
  }, [dispatch]);
  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10">
      {!isPlayVideo && (
        <IKImage path={imgCur} className="w-full h-full object-cover" />
      )}
      <IKVideo
        path="video1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        style={{ display: isPlayVideo ? "block" : "none" }}
      />
    </div>
  );
}
