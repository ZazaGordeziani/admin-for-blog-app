import { supabase } from "..";

export async function fetchBlogs() {
  try {
    const { data, error } = await supabase.from("Blogs").select("*");

    if (error) {
      console.error("Error fetching blogs:", error);
      return;
    }

    console.log("Blogs:", data);
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
