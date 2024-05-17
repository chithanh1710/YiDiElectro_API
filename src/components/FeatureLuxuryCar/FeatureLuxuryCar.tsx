import { useState } from "react";
import { ListLogo } from "./ListLogo";
import { ListFeatureLuxuryCar } from "./ListFeatureLuxuryCar";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useGetCarByTypeQuery } from "../../rtk-query/carApi";
import Err from "../../pages/Err";
export function FeatureLuxuryCar() {
  const [logo, setLogo] = useState("All");
  const lang = useSelector((store: storeProps) => store.app.lang);
  const { data, isError } = useGetCarByTypeQuery("feature");
  if (isError) {
    return <Err />;
  }
  if (!data?.data) {
    return null;
  }
  return (
    <div className="container-width">
      <div>
        <h2 className="font-semibold text-center py-8 text-3xl">
          {lang === "English" ? "Feature Luxury Car" : "Xe hơi sang trọng"}
        </h2>
        <ListLogo logo={logo} setLogo={setLogo} />
        <div className="mt-8">
          <ListFeatureLuxuryCar data={data?.data} logo={logo} />
        </div>
      </div>
    </div>
  );
}
