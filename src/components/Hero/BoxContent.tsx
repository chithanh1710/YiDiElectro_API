import { useSelector } from "react-redux";
import { listIcon } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { storeProps } from "../../store";

export function BoxContent() {
  const content = useSelector((store: storeProps) => store.home.slide.content);
  const numDot = useSelector((store: storeProps) => store.home.numDot);
  const lang = useSelector((store: storeProps) => store.app.lang);
  const navigate = useNavigate();
  const contentVN: string[] = [
    "Khám phá các mẫu xe hạng sang cho những hành trình đáng nhớ.",
    "Khám phá những công nghệ và sức mạnh mới nhất.",
    "Hành trình của bạn bắt đầu với những chiếc xe vượt trội.",
    "Chào mừng bạn đến với trải nghiệm lái xe đích thực!",
  ];
  return (
    // <div className="absolute top-[50%] md:left-[0] left-[50%] w-[80%] max-md:-translate-x-1/2 text-default -translate-y-1/2 md:max-w-[50%] ">
    <div className="w-[80%] text-default absolute top-1/2 -translate-y-1/2 md:max-w-[50%] ">
      <h2 key={content} className={`text-[max(3.8vw,40px)] inTopAnimation`}>
        {lang === "English" ? content : contentVN[numDot - 1]}
      </h2>

      <button
        onClick={() => {
          navigate("products");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        key={content + "zxcvcbvc"} // để tạo ra 1 key ngẫu nhiên để có thể render lại và có thêm animation
        className="flex gap-6 items-center animate-[inTop_ease_1.6s_0.4s_backwards] text-[max(1.4vw,16px)] mt-8 lg:mt-16 bg-white rounded-full pl-6 p-2 text-gray-600 transition-all duration-300 hover:bg-gray-600 hover:text-gray-200"
      >
        <span className="font-medium">
          {lang === "English"
            ? "Explore the features"
            : "Khám phá các tính năng"}
        </span>
        <img className="h-[max(3vw,40px)]" src={listIcon.arrow_btn} alt="" />
      </button>
    </div>
  );
}
