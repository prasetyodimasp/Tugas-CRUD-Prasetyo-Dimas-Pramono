import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserDataType } from "../../components/data-list/constants";

const fetcher = async (payload: UserDataType) => {
  return await axios
    .put(`https://jsonplaceholder.typicode.com/users/${payload.id}`, {
      name: payload.name,
      username: payload.username,
      email: payload.email,
    })
    .then((res) => res.data);
};

export const useEditUser = () => {
  return useMutation({ mutationFn: fetcher });
};
