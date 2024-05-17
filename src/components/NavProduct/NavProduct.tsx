import { useRef, useState } from "react";
import { NavProductItem } from "./NavProductItem";
import { useDispatch, useSelector } from "react-redux";
import {
  addBrand,
  addPrice,
  addProductType,
  clearOption,
  removeBrand,
  removePrice,
  removeProductType,
} from "../../pages/productSlide";
import { storeProps } from "../../store";

export function NavProduct() {
  const [isShowProductType, setIsShowProductType] = useState(false);
  const [isShowPrice, setIsShowPrice] = useState(false);
  const [isShowBrands, setIsShowBrands] = useState(false);
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  const brandRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const priceRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  function handleBrand(e: React.MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(addBrand(target.value));
    } else {
      dispatch(removeBrand(target.value));
    }
  }
  function handleProductType(e: React.MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(addProductType(target.value));
    } else {
      dispatch(removeProductType(target.value));
    }
  }
  function handlePrice(e: React.MouseEvent) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      dispatch(addPrice(target.value));
    } else {
      dispatch(removePrice(target.value));
    }
  }
  function handleClear() {
    dispatch(clearOption());
    if (brandRef.current && typeRef.current && priceRef.current) {
      brandRef.current.querySelectorAll("input").forEach((el) => {
        el.checked = false;
      });
      typeRef.current.querySelectorAll("input").forEach((el) => {
        el.checked = false;
      });
      priceRef.current.querySelectorAll("input").forEach((el) => {
        el.checked = false;
      });
    }
  }
  return (
    <nav className="bg-gray-100 px-4 py-4 rounded-xl text-black">
      <NavProductItem
        type={`${isEnglish ? "Brands" : "Thương hiệu"}`}
        forwardedRef={brandRef}
        isShow={isShowBrands}
        setIsShow={setIsShowBrands}
      >
        <li>
          <input
            onClick={handleBrand}
            className="mr-2"
            id="tesla"
            type="checkbox"
            value="Tesla"
          />
          <label htmlFor="tesla">Tesla</label>
        </li>
        <li>
          <input
            onClick={handleBrand}
            className="mr-2"
            id="audi"
            type="checkbox"
            value="Audi"
          />
          <label htmlFor="audi">Audi</label>
        </li>
        <li>
          <input
            onClick={handleBrand}
            className="mr-2"
            id="porsche"
            type="checkbox"
            value="Porsche"
          />
          <label htmlFor="porsche">Porsche</label>
        </li>
      </NavProductItem>

      <NavProductItem
        forwardedRef={typeRef}
        type={`${isEnglish ? "Product Type" : "Loại sản phẩm"}`}
        isShow={isShowProductType}
        setIsShow={setIsShowProductType}
      >
        <li>
          <input
            onClick={handleProductType}
            className="mr-2"
            id="luxury"
            type="checkbox"
            value="Luxury"
          />
          <label htmlFor="luxury">{isEnglish ? "Luxury" : "Hạng sang"}</label>
        </li>
        <li>
          <input
            onClick={handleProductType}
            className="mr-2"
            id="sports"
            type="checkbox"
            value="Sports"
          />
          <label htmlFor="sports">{isEnglish ? "Sport" : "Thể thao"}</label>
        </li>
        <li>
          <input
            onClick={handleProductType}
            className="mr-2"
            id="family"
            type="checkbox"
            value="Family"
          />
          <label htmlFor="family">{isEnglish ? "Family" : "Gia đình"}</label>
        </li>
      </NavProductItem>
      <NavProductItem
        forwardedRef={priceRef}
        type={isEnglish ? "Price" : "Giá"}
        isShow={isShowPrice}
        setIsShow={setIsShowPrice}
      >
        <li>
          <input
            onClick={handlePrice}
            className="mr-2"
            id="100"
            type="checkbox"
            value="$100.000 - $199.999"
          />
          <label htmlFor="100">$100.000 - $199.999</label>
        </li>
        <li>
          <input
            onClick={handlePrice}
            className="mr-2"
            id="200"
            type="checkbox"
            value="$200.000 - $299.999"
          />
          <label htmlFor="200">$200.000 - $299.999</label>
        </li>
        <li>
          <input
            onClick={handlePrice}
            className="mr-2"
            id="300"
            type="checkbox"
            value="$300.000 - $399.999"
          />
          <label htmlFor="300">$300.000 - $399.999</label>
        </li>
        <li>
          <input
            onClick={handlePrice}
            className="mr-2"
            id="400"
            type="checkbox"
            value="$400.000 - $499.999"
          />
          <label htmlFor="400">$400.000 - $499.999</label>
        </li>
        <li>
          <input
            onClick={handlePrice}
            className="mr-2"
            id="500"
            type="checkbox"
            value="$500.000+"
          />
          <label htmlFor="500">$500.000+</label>
        </li>
      </NavProductItem>
      <button
        onClick={handleClear}
        className="w-full h-full bg-yellow-400 rounded-md font-semibold px-2 py-2 transition-all duration-300 hover:shadow-lg hover:bg-yellow-600 hover:-translate-y-1 hover:scale-105"
      >
        {isEnglish ? "Clear" : "Xoá tất cả"}
      </button>
    </nav>
  );
}
