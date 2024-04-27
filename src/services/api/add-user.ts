import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserDataType } from "../../components/data-list/constants";

const fetcher = async (payload: Omit<UserDataType, "id">) => {
  return await axios
    .post(`https://jsonplaceholder.typicode.com/users`, payload)
    .then((res) => res.data);
};

export const useAddUser = () => {
  return useMutation({ mutationFn: fetcher });
};
