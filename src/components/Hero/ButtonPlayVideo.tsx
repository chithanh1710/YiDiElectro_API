import { useDispatch, useSelector } from "react-redux";
import { playVideo, stopVideo } from "../../pages/homeSlice";
import { listIcon } from "../../assets/assets";
import { storeProps } from "../../store";

export function ButtonPlayVideo() {
  const isPlayVideo = useSelector(
    (store: storeProps) => store.home.isPlayVideo
  );
  const dispatch = useDispatch();
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div
      onClick={() => {
        if (!isPlayVideo) {
          dispatch(playVideo());
        } else {
          dispatch(stopVideo());
        }
      }}
      className={`absolute top-[90%] right-[5%] max-md:-translate-x-1/2
-translate-y-1/2 flex gap-4 text-default items-center cursor-pointer`}
    >
      <img
        className="md:h-[60px] h-[40px]"
        src={!isPlayVideo ? listIcon.play_icon : listIcon.pause_icon}
        alt=""
      />
      <span className="text-2xl hidden md:block">
        {lang === "English"
          ? !isPlayVideo
            ? "See the video"
            : "Pause the video"
          : !isPlayVideo
          ? "Xem video"
          : "Dừng video"}
      </span>
    </div>
  );
}
