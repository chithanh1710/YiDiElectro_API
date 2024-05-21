import { Star } from "lucide-react";

export function SkeletonCRV() {
  return (
    <div className="content opacity-4 scale-50 transition-all rounded-lg duration-500 px-12 py-6 mt-2 md:mx-0 mx-6 cursor-wait">
      <div className="w-16 h-16 rounded-full mx-auto mb-6 bg-gray-200"></div>
      <div className="flex flex-col gap-6 mb-6">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <h2 className="font-semibold text-xl mb-3 bg-gray-100 w-24 h-10 mx-auto"></h2>
      <div className="flex justify-center items-center gap-1">
        {Array.from({ length: 5 }, (_, index) => (
          <Star key={index} className="text-gray-100 fill-current w-4 h-4" />
        ))}
      </div>
    </div>
  );
}
