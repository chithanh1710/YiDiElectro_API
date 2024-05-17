import { ReactNode, Ref } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function NavProductItem({
  setIsShow,
  isShow,
  type,
  children,
  forwardedRef,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  isShow: boolean;
  children: ReactNode;
  forwardedRef: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={forwardedRef}
      className="bg-white px-2 py-2 shadow rounded-lg mb-4"
    >
      <div
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
        className="flex cursor-pointer justify-between items-center"
      >
        <h2 className="font-semibold">{type}</h2>
        {isShow ? <ChevronUp /> : <ChevronDown />}
      </div>
      <ul
        className={`flex-col gap-1 mt-2 py-2 border-t-2 border-gray-100 text-gray-500 font-medium ${
          isShow ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
}
