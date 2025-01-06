import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  getSingleUserInAdmin,
  getUsersListInAdmin,
  User,
} from "../../../pages/users/api/admin";
import { USERS_QUERY_KEY } from "./enum";

export const useGetUsersListInAdmin = <T,>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<User[], any, T>, "queryKey">;
} = {}): UseQueryResult<T, any> => {
  return useQuery<User[], any, T>({
    queryKey: [USERS_QUERY_KEY.LIST],
    queryFn: getUsersListInAdmin,
    ...queryOptions,
  });
};

export const useGetSingleUserInAdmin = <T,>(
  id: string,
  {
    queryOptions,
  }: {
    queryOptions?: Omit<UseQueryOptions<User | null, any, T>, "queryKey">;
  }
): UseQueryResult<T, any> => {
  return useQuery<User | null, any, T>({
    queryKey: [USERS_QUERY_KEY.SINGLE_USER, id],
    queryFn: () => getSingleUserInAdmin(id),
    ...queryOptions,
    // select: (data) => {
    //   if (data) {
    //     return {
    //       email: data.email,
    //       phone_number: data.phone,
    //     };
    //   }
    //   return null;
    // },
  });
};
