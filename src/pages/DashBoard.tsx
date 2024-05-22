import { Navigate } from "react-router-dom";

export default function DashBoard() {
  const isAdminLogin = sessionStorage.getItem("adminLogin") === "true";
  console.log("render");
  if (!isAdminLogin) {
    return <Navigate to="/admin/login" replace />;
  } else {
    return (
      <iframe
        src="https://yidielectro-api-be.onrender.com/"
        frameBorder="0"
        className="w-full h-screen"
      ></iframe>
    );
  }
}
