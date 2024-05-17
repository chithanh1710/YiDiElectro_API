import { useDispatch, useSelector } from "react-redux";
import { getDataPageProduct, updateSortBy } from "../../pages/productSlide";
import { storeProps } from "../../store";
import { useGetFullCarQuery } from "../../rtk-query/carApi";
import Err from "../../pages/Err";

export function SortByItem() {
  const dispatch = useDispatch();
  const optionProduct = useSelector((store: storeProps) => store.product);
  const lang = useSelector((store: storeProps) => store.app.lang);
  const { data, isError } = useGetFullCarQuery("");
  if (isError) {
    return <Err />;
  }
  if (!data?.data) {
    return null;
  }
  const length = getDataPageProduct(data.data, optionProduct).length;

  return (
    <div className="justify-between items-center flex mb-6">
      <p className="text-white font-semibold sm:text-lg text-xs">
        {lang === "English"
          ? `Showing ${length} Products`
          : `Hiển thị ${length} sản phẩm`}
      </p>
      <div className="bg-gray-300 rounded-full flex gap-2 px-6 py-2 sm:text-lg text-xs">
        <label className="text-gray-500 font-medium" htmlFor="sortBy">
          {lang === "English" ? "Sort by:" : "Sắp xếp theo:"}
        </label>
        <select
          onChange={(e) => {
            dispatch(updateSortBy(e.target.value));
          }}
          id="sortBy"
          className="bg-transparent outline-none text-black font-semibold"
          value={optionProduct.sortBy}
        >
          <option value="high">
            {lang === "English" ? "High pricing" : "Giá cao"}
          </option>
          <option value="low">
            {lang === "English" ? "Low pricing" : "Giá thấp"}
          </option>
        </select>
      </div>
    </div>
  );
}
