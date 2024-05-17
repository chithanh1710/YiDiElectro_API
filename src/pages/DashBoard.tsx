import { Navigate } from "react-router-dom";

export default function DashBoard() {
  const isAdminLogin = sessionStorage.getItem("adminLogin") === "true";
  console.log("render");
  if (!isAdminLogin) {
    return <Navigate to="/admin/login" replace />;
  } else {
    return <h1>Dashboard</h1>;
  }
}
