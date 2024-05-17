import { useSelector } from "react-redux";
// import { listImg } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { storeProps } from "../../store";
import { IKContext, IKImage } from "imagekitio-react";

export function HomeAbout() {
  const navigate = useNavigate();
  const lang = useSelector((store: storeProps) => store.app.lang);
  return (
    <div className="container-width bg-gray-300">
      <div className="flex max-width-default mx-auto md:flex-row gap-4 md:gap-20 flex-col py-8">
        <div>
          <IKContext
            publicKey="public_POLuSf/Qrn79R+Goy2t0JxWA6XM="
            urlEndpoint="https://ik.imagekit.io/yidiElectro"
            transformationPosition="path"
          >
            <IKImage
              path="/about.png"
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </IKContext>
        </div>
        <div className="md:w-[80%] space-y-4 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold">
            {lang === "English"
              ? "Machines With Future Technology"
              : "Các máy tính với Công nghệ Tương lai"}
          </h2>
          <p className="text-gray-600">
            {lang === "English"
              ? " See the future with high-performance electric cars produced by renowned brands. They feature futuristic builds and designs with new and innovative platforms that last a long time."
              : "Nhìn vào tương lai với những chiếc xe điện hiệu suất cao được sản xuất bởi các thương hiệu nổi tiếng. Chúng có các thiết kế và nền tảng mới và sáng tạo, giúp chiếc xe kéo dài thời gian sử dụng một cách lâu dài."}
          </p>
          <button
            onClick={() => {
              navigate("about");
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            className="px-6 py-3 bg-yellow-400 rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
          >
            {lang === "English" ? "Know more" : "Biết thêm"}
          </button>
        </div>
      </div>
    </div>
  );
}
