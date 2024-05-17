import { listIcon } from "../../assets/assets";

export function ListLogoCar() {
  const iconList = [
    listIcon.logo1,
    listIcon.logo2,
    listIcon.logo3,
    listIcon.logo4,
    listIcon.logo5,
    listIcon.logo6,
  ];
  return (
    <div className="mt-28 py-16 border-t-2 border-t-black bg-black overflow-x-hidden w-screen">
      <div className="flex w-[600px] mx-auto relative overflow-x-hidden">
        <div
          style={{ animation: "inLeft 5s linear infinite" }}
          className="w-full grid grid-cols-6"
        >
          {iconList.map((icon) => (
            <div key={icon}>
              <img className="w-20 object-contain h-full px-5" src={icon} />
            </div>
          ))}
        </div>
        <div
          style={{ animation: "inLeft 5s linear infinite" }}
          className="w-full grid grid-cols-6 absolute left-full"
        >
          {iconList.map((icon) => (
            <div key={icon}>
              <img className="w-20 object-contain h-full px-5" src={icon} />
            </div>
          ))}
        </div>
        <div className="absolute left-0 h-full w-10 bg-gradient-to-r from-black to-transparent"></div>
        <div className="absolute right-0 h-full w-10 bg-gradient-to-l from-black to-transparent"></div>
      </div>
    </div>
  );
}
