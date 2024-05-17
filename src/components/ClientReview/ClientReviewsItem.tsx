import { useSelector } from "react-redux";
import { dataClientReviewProps } from "../../data/interfaceDataClientReview";
import { Star } from "lucide-react";
import { storeProps } from "../../store";

export function ClientReviewsItem({ item }: { item: dataClientReviewProps }) {
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  return (
    <div className="content opacity-4 scale-50 transition-all rounded-lg duration-500 px-12 py-6 mt-2 md:mx-0 mx-6">
      <img
        className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
        src={item.img}
        alt=""
      />
      <p className="text-sm text-gray-500 mb-6">
        {isEnglish ? item.contentEnglish : item.content}
      </p>
      <h2 className="font-semibold text-xl mb-3">{item.name}</h2>
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: item.star }, (_, index) => (
          <Star key={index} className="text-yellow-400 fill-current w-4 h-4" />
        ))}
      </div>
    </div>
  );
}
