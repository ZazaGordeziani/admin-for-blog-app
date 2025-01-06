import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import {
  blog,
  getBlogsListInAdmin,
  getSingleBlogInAdmin,
} from "../../../pages/admin-pages/blogs";
import { BLOGS_QUERY_KEY } from "./enum";

export const useGetBlogsListInAdmin = <T,>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<blog[], any, T>, "queryKey">;
}): UseQueryResult<T, any> => {
  return useQuery<blog[], any, T>({
    queryKey: [BLOGS_QUERY_KEY.LIST],
    queryFn: getBlogsListInAdmin,
    ...queryOptions,
  });
};

export const useGetSingleBlogInAdmin = <T,>({
  id,
  queryOptions,
}: {
  id: number | string;
  queryOptions?: Omit<UseQueryOptions<blog | null, any, T>, "queryKey">;
}): UseQueryResult<T, any> => {
  return useQuery<blog | null, any, T>({
    queryKey: [BLOGS_QUERY_KEY.SINGLE, id],
    queryFn: () => getSingleBlogInAdmin(id),
    ...queryOptions,
  });
};
