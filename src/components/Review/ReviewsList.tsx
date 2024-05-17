import { useSelector } from "react-redux";
import { CarIcon, HomeIcon, PeopleIcon } from "../../assets/listIcon";
import { ReviewItem } from "./ReviewItem";
import { storeProps } from "../../store";

export function ReviewsList() {
  const lang = useSelector((store: storeProps) => store.app.lang);
  const dataReviews = [
    {
      icon: <HomeIcon />,
      num: 150,
      name: lang === "English" ? "Branches" : "Chi nhánh",
    },
    {
      icon: <CarIcon />,
      num: 4800,
      name: lang === "English" ? "Cars Sold" : "Xe đã bán",
    },
    {
      icon: <PeopleIcon />,
      num: 4320,
      name: lang === "English" ? "Happy Clients" : "Khách hàng hài lòng",
    },
    {
      icon: <CarIcon />,
      num: 180,
      name: lang === "English" ? "New Cars" : "Xe mới",
    },
  ];
  return (
    <div className="container-width bg-gray-300">
      <div className="flex gap-4 justify-between max-width-default mx-auto py-9 flex-wrap">
        {dataReviews.map((item) => (
          <ReviewItem
            icon={item.icon}
            name={item.name}
            key={item.name}
            num={item.num}
          />
        ))}
      </div>
    </div>
  );
}
