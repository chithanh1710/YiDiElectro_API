import { lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { storeProps } from "./store";

// Layout
import AppLayout from "./layouts/User/AppLayout";
import AdminLayout from "./layouts/Admin/AdminLayout";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Products = lazy(() => import("./pages/Products"));
const ProductId = lazy(() => import("./pages/ProductId"));
const CheckOut = lazy(() => import("./pages/CheckOut"));
const About = lazy(() => import("./pages/About"));
const Err = lazy(() => import("./pages/Err"));
const Login = lazy(() => import("./pages/Login"));
const LoginAdmin = lazy(() => import("./pages/LoginAdmin"));
const DashBoard = lazy(() => import("./pages/DashBoard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app" />,
    errorElement: <Err />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    errorElement: <Err />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductId />,
      },
      {
        path: "products/:id/checkout",
        element: <CheckOut />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Err />,
    children: [
      {
        path: "login",
        element: <LoginAdmin />,
      },
      {
        path: "dashboard",
        element: <DashBoard />,
      },
    ],
  },
]);

export default function App() {
  const isEnglish = useSelector(
    (store: storeProps) => store.app.lang === "English"
  );
  return (
    <div className={`${isEnglish ? "font-sans" : "font-body"}`}>
      <RouterProvider router={router} />
    </div>
  );
}
