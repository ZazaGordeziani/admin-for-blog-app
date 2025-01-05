// import { PropsWithChildren } from "react";
import { supabase } from "../../../supabase";
import { Blog } from "./views/blog-create/blog-update";

export const getBlogsListInAdmin = () => {
  return supabase
    .from("Blogs")
    .select("*")
    .then((res) => {
      // console.log(res.data);
      return res.data as blog[];
    });
};

export const updateBlogInAdmin = (
  id: string,
  payload: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }
) => {
  return supabase
    .from("Blogs")
    .update(payload)
    .eq("id", id)
    .then((res) => {
      if (res.error) {
        console.error("Error updating blog:", res.error);
        return null;
      }
      // console.log("Blog updated:", res.data);
      return res.data;
    });
};

export const getSingleBlogInAdmin = (
  id: number | string
): Promise<Blog | null> => {
  return supabase
    .from("Blogs")
    .select("*")
    .eq("id", id)
    .single()
    .then((res) => {
      if (res.error) {
        console.error("Error fetching blog:", res.error);
        return null;
      }
      // console.log("Fetched blog data:", res.data);
      return {
        title_ka: res.data?.title_ka || "",
        title_en: res.data?.title_en || "",
        description_ka: res.data?.description_ka || "",
        description_en: res.data?.description_en || "",
        image_url: res.data?.image_url || "",
        created_at: res.data?.created_at || "",
      };
    });
};

export type blog = {
  id: string | number;
  created_at: string;
  title_ka: string;
  title_en: string;
  description_ka: string;
  user_id: string;
  image_url: string;
  description_en: string;
};
