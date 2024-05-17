import { ReactNode } from "react";

export function ReviewItem({
  num,
  icon,
  name,
}: {
  num: number;
  icon: ReactNode;
  name: string;
}) {
  return (
    <div className="flex items-center px-6 py-8 gap-4 bg-white rounded-md flex-1 shadow-md reviewItem">
      <span className="bg-gray-200 w-14 h-14 flex items-center justify-center rounded-full">
        {icon}
      </span>
      <div>
        <h3 className="text-yellow-400 font-bold text-2xl">{num}+</h3>
        <p className="text-[16px] text-gray-500">{name}</p>
      </div>
    </div>
  );
}
