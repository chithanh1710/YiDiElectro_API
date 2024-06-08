import { useMutation } from "@tanstack/react-query";
import { checkUserApi } from "../services/userApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedTrue } from "../layouts/User/AppSlice";

export const useCheckUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate: checkUser, isPending: isCheck } = useMutation({
    mutationKey: ["checkUser"],
    mutationFn: checkUserApi,
    onSuccess: () => {
      navigate("/app");
      dispatch(setIsLoggedTrue());
      toast.success("Login successful");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
      toast.error("Login failed");
    },
  });
  return { checkUser, isCheck };
};
