import { supabase } from "../../../supabase";

export const getBlogsListInAdmin = () => {
  return supabase
    .from("Blogs")
    .select("*")
    .then((res) => {
      console.log(res.data);
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
      console.log("Blog updated:", res.data);
      return res.data;
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
