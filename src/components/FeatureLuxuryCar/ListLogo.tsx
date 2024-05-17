import { dataLogo } from "../../data/dataFeatureLuxuryCar";

export function ListLogo({
  setLogo,
  logo,
}: {
  logo: string;
  setLogo: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex justify-center items-center gap-4 py-2">
      {dataLogo.map((item, index) => (
        <div
          onClick={() => {
            setLogo(item.brand);
          }}
          className={`bg-gray-700 h-12 cursor-pointer w-12 flex justify-center items-center text-white rounded-lg ${
            item.brand === logo ? "opacity-100" : "opacity-50"
          }`}
          key={item.logo}
        >
          {index === 0 ? (
            <p className="text-xl font-semibold">{item.logo}</p>
          ) : (
            <img className="h-6 w-8 object-contain" src={item.logo} alt="" />
          )}
        </div>
      ))}
    </div>
  );
}
