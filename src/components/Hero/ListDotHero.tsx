import { useDispatch, useSelector } from "react-redux";
import { updateNumDot } from "../../pages/homeSlice";
import { storeProps } from "../../store";

export function ListDotHero() {
  const dispatch = useDispatch();
  const numDot = useSelector((store: storeProps) => store.home.numDot);
  return (
    <ul
      className="absolute top-[90%] md:left-[5%] left-[50%] max-md:-translate-x-1/2
-translate-y-1/2 flex gap-4"
    >
      <li
        onClick={() => {
          dispatch(updateNumDot(1));
        }}
        className={`h-4 w-4  rounded-full cursor-pointer ${
          numDot === 1 ? "bg-[tomato]" : "bg-default"
        }`}
      ></li>
      <li
        onClick={() => {
          dispatch(updateNumDot(2));
        }}
        className={`h-4 w-4  rounded-full cursor-pointer ${
          numDot === 2 ? "bg-[tomato]" : "bg-default"
        }`}
      ></li>
      <li
        onClick={() => {
          dispatch(updateNumDot(3));
        }}
        className={`h-4 w-4  rounded-full cursor-pointer ${
          numDot === 3 ? "bg-[tomato]" : "bg-default"
        }`}
      ></li>
      <li
        onClick={() => {
          dispatch(updateNumDot(4));
        }}
        className={`h-4 w-4  rounded-full cursor-pointer ${
          numDot === 4 ? "bg-[tomato]" : "bg-default"
        }`}
      ></li>
    </ul>
  );
}
