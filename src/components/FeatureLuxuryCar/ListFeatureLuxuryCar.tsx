import { dataPopularProductsProps } from "../../data/interfaceDataCar";
import { ItemFeatureLuxuryCar } from "./ItemFeatureLuxuryCar";

export function ListFeatureLuxuryCar({
  logo,
  data,
}: {
  logo: string;
  data: dataPopularProductsProps[];
}) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10`}
    >
      {data.map((item) => (
        <ItemFeatureLuxuryCar
          setStyle={
            item.brand === logo
              ? "scaleAnimation"
              : logo === "All"
              ? ""
              : "hidden"
          }
          item={item}
          key={item.name}
        />
      ))}
    </div>
  );
}
