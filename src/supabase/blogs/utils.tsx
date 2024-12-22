import { supabase } from "..";

export async function fetchBlogs() {
  try {
    const { data, error } = await supabase
      .from("Blogs") // Name of the table you want to query
      .select("*"); // Select all columns from the table

    if (error) {
      console.error("Error fetching blogs:", error);
      return;
    }

    // Log the data retrieved from the 'blogs' table
    console.log("Blogs:", data);
  } catch (err) {
    console.error("An error occurred:", err);
  }
}
