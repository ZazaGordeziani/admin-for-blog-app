import { supabase } from "../../../../../supabase";

export const updateBlogInAdmin = (id: string | undefined) => {
  supabase
    .from("Blogs")
    .select(id)
    .then((res) => console.log(res));
};

export const addNewBlog = async (payload: {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_url: string;
  created_at: string;
}) => {
  try {
    const { data, error } = await supabase.from("Blogs").insert({
      title_ka: payload.title_ka,
      title_en: payload.title_en,
      description_ka: payload.description_ka,
      description_en: payload.description_en,
      image_url: payload.image_url,
      created_at: payload.created_at,
    });

    if (error) {
      console.error("Error inserting blog:", error);
      return null;
    }

    console.log("Blog added successfully:", data);
    return data;
  } catch (error) {
    console.error("Error occurred while adding blog:", error);
    return null;
  }
};
