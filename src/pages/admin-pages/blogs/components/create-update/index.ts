import { supabase } from "../../../../../supabase";

export const updateBlogInAdmin = (id: string | undefined) => {
  supabase
    .from("Blogs")
    .select(id)
    .then((res) => console.log(res));
};
