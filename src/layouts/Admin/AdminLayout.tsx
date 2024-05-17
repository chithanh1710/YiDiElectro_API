import { ArrowLeft, ArrowRight } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const param = location.pathname;
  const navigate = useNavigate();
  if (param === "/admin") {
    return (
      <div className="flex w-full bg-red-800 h-screen justify-center items-center gap-20 max-sm:flex-col">
        <button
          onMouseOver={(e) => {
            const p1 = e.currentTarget.querySelector(
              "#p1"
            ) as HTMLParagraphElement;
            const p2 = e.currentTarget.querySelector(
              "#p2"
            ) as HTMLParagraphElement;
            p1.style.transition = "all 0.4s";
            p1.style.transform = "translateX(-160px)";
            p1.style.opacity = "0";

            p2.style.transition = "all 0.4s";
            p2.style.opacity = "1";
            p2.style.left = "0";
            p2.style.color = "white";
          }}
          onMouseLeave={(e) => {
            const p1 = e.currentTarget.querySelector(
              "#p1"
            ) as HTMLParagraphElement;
            const p2 = e.currentTarget.querySelector(
              "#p2"
            ) as HTMLParagraphElement;
            p1.style.transform = "translateX(0px)";
            p1.style.opacity = "1";

            p2.style.opacity = "0";
            p2.style.left = "100%";
            p2.style.color = "black";
          }}
          onClick={() => {
            navigate("/app");
          }}
          className="h-40 overflow-hidden relative w-60 text-2xl bg-yellow-400 rounded-lg font-bold transition-all duration-600 hover:shadow-lg hover:bg-yellow-700 hover:-translate-y-1 hover:scale-105"
        >
          <p id="p1">App</p>
          <p
            id="p2"
            className="absolute w-full flex flex-col-reverse gap-2 top-1/2 -translate-y-1/2 left-full items-center"
          >
            <span>
              <ArrowLeft />
            </span>
            Back to main application
          </p>
        </button>
        <button
          onMouseOver={(e) => {
            const p1 = e.currentTarget.querySelector(
              "#p1"
            ) as HTMLParagraphElement;
            const p2 = e.currentTarget.querySelector(
              "#p2"
            ) as HTMLParagraphElement;
            p1.style.transition = "all 0.4s";
            p1.style.transform = "translateX(160px)";
            p1.style.opacity = "0";

            p2.style.transition = "all 0.4s";
            p2.style.opacity = "1";
            p2.style.right = "0";
            p2.style.color = "white";
          }}
          onMouseLeave={(e) => {
            const p1 = e.currentTarget.querySelector(
              "#p1"
            ) as HTMLParagraphElement;
            const p2 = e.currentTarget.querySelector(
              "#p2"
            ) as HTMLParagraphElement;
            p1.style.transform = "translateX(0px)";
            p1.style.opacity = "1";

            p2.style.opacity = "0";
            p2.style.right = "100%";
            p2.style.color = "black";
          }}
          onClick={() => {
            navigate("login");
          }}
          className="h-40 overflow-hidden relative w-60 text-2xl bg-yellow-400 rounded-lg font-bold transition-all duration-600 hover:shadow-lg hover:bg-yellow-700 hover:-translate-y-1 hover:scale-105"
        >
          <p id="p1">Admin</p>
          <p
            id="p2"
            className="absolute w-full flex flex-col-reverse gap-2 top-1/2 -translate-y-1/2 right-full items-center"
          >
            <span>
              <ArrowRight />
            </span>
            Continue to admin
          </p>
        </button>
      </div>
    );
  } else {
    return <Outlet />;
  }
}
