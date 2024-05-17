import { useSelector } from "react-redux";
import { nextNumDotAndSlide } from "../../pages/homeSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeProps } from "../../store";
import { IKContext, IKImage } from "imagekitio-react";

export default function Background() {
  const imgCur = useSelector((store: storeProps) => store.home.slide.img);
  const vidCur = useSelector((store: storeProps) => store.home.slide.vid);
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
      {!isPlayVideo ? (
        <IKContext
          publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
          urlEndpoint="https://ik.imagekit.io/yidiElectro"
          transformationPosition="path"
        >
          <IKImage path={imgCur} className="w-full h-full object-cover" />
        </IKContext>
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source type="video/mp4" src={vidCur} />
        </video>
      )}
    </div>
  );
}
