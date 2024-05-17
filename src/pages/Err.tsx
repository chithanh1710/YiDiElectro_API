import { useNavigate, useRouteError } from "react-router-dom";
import { listIcon } from "../assets/assets";

interface errProps {
  data: string;
  message: string;
}

export default function Err() {
  const err = useRouteError() as errProps;
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(https://ik.imagekit.io/yidiElectro/image4.webp)`,
      }}
      className="flex justify-center items-center text-2xl bg-red-400 h-screen bg-cover bg-no-repeat"
    >
      <div className="w-[600px] bg-red-600 h-[300px] text-default p-8 space-y-4 rounded-lg">
        <h1 className="text-center text-4xl font-bold">Error</h1>
        <h1>Something went wrong 😢</h1>
        <p>{err?.data || err?.message || 404}</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-4 p-2 bg-default text-gray-600 rounded-full pl-6"
        >
          <span>Back to home</span>
          <img className="h-[40px]" src={listIcon.arrow_btn} alt="" />
        </button>
      </div>
    </div>
  );
}
