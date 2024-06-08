import { useMutation } from "@tanstack/react-query";
import { createUserApi } from "../services/userApi";
import toast from "react-hot-toast";
import { checkUser } from "../interface/typeCheckUser";

export const useCreateUser = (checkUser: checkUser) => {
  const { mutate: createNewUser, isPending: isCreate } = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createUserApi,
    onSuccess: (_, variable) => {
      checkUser(variable);
      toast.success("Account registration successful");
    },
    onError: (err) => {
      toast.error(err.message);
      toast.error("Account registration failed");
    },
  });
  return { createNewUser, isCreate };
};
