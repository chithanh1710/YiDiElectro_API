import { useState } from "react";
import { ListLogo } from "./ListLogo";
import { ListFeatureLuxuryCar } from "./ListFeatureLuxuryCar";
import { useSelector } from "react-redux";
import { storeProps } from "../../store";
import { useGetCarByTypeQuery } from "../../services/carApi";
import { SkeletonFLC } from "./SkeletonFLC";
import dataDefault from "./dataDefaultFLC";
export function FeatureLuxuryCar() {
  const [logo, setLogo] = useState("All");
  const lang = useSelector((store: storeProps) => store.app.lang);
  const { data, isLoading, isError } = useGetCarByTypeQuery("feature");

  if (isError) {
    throw new Error("ERR 404 💥");
  }

  return (
    <div className="container-width">
      <div>
        <h2 className="font-semibold text-center py-8 text-3xl">
          {lang === "English" ? "Feature Luxury Car" : "Xe hơi sang trọng"}
        </h2>
        <ListLogo logo={logo} setLogo={setLogo} />
        <div className="mt-8">
          {!isLoading ? (
            <ListFeatureLuxuryCar
              data={data?.data || dataDefault}
              logo={logo}
            />
          ) : (
            <div
              className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-10`}
            >
              <SkeletonFLC />
              <SkeletonFLC />
              <SkeletonFLC />
              <SkeletonFLC />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
