import { Navigate } from "react-router-dom";

export default function DashBoard() {
  const isAdminLogin = sessionStorage.getItem("adminLogin") === "true";
  if (!isAdminLogin) {
    return <Navigate to="/admin/login" replace />;
  } else {
    window.location.href =
      "https://yidielectro-api-be.onrender.com/?token=0123456789";
    return null;
  }
}
