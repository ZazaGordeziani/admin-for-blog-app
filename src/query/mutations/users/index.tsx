import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { login, LoginPayload } from "../../../pages/auth";
import { USERS_MUTATION_KEY } from "./enum";

export const useLogIn = (
  mutationsOptions?: UseMutationOptions<any, any, LoginPayload>
) => {
  return useMutation({
    mutationKey: [USERS_MUTATION_KEY.LOGIN],
    mutationFn: login,
    ...mutationsOptions,
  });
};
