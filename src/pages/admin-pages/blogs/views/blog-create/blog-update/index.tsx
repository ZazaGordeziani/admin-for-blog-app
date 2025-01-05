import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";
import { getSingleBlogInAdmin } from "../../..";
import { updateBlogInAdmin } from "../../../index";
import { useQuery } from "@tanstack/react-query";
import BlogsCreateUpdateForm from "../../../components/create-update/create-update";

export type Blog = {
  id: string | number;
  created_at: string;
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  user_id: string;
  image_url: string;
};

const BlogsUpdateView = () => {
  const { id } = useParams();
  // console.log("blog id", id)

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery<Blog | null>({
    queryKey: ["blog", id],
    queryFn: () => getSingleBlogInAdmin(id as string),
    enabled: !!id,
  });

  if (error) {
    return <div>Error Happened</div>;
  }

  // const [blog, setBlog] = useState<{
  //   title_ka: string;
  //   title_en: string;
  //   description_ka: string;
  //   description_en: string;
  //   image_url: string;
  //   created_at: string;
  // }>({
  //   title_ka: "",
  //   title_en: "",
  //   description_ka: "",
  //   description_en: "",
  //   image_url: "",
  //   created_at: "",
  // });

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchBlogData = async () => {
  //     try {
  //       await getSingleBlogInAdmin(id as string).then((res) => {
  //         setBlog({
  //           title_ka: res?.title_ka || "",
  //           title_en: res?.title_en || "",
  //           description_ka: res?.description_ka || "",
  //           description_en: res?.description_en || "",
  //           image_url: res?.image_url || "",
  //           created_at: res?.created_at || "",
  //         });
  //       });
  //     } catch (error) {
  //       console.error("Error happened while fetching blog data:", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchBlogData();
  // }, [id]);

  const handleUpdateBlog = (values: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }) => {
    // Call the update function and pass the values to update the blog
    updateBlogInAdmin(id as string, values);

    // Optionally, redirect to another page after submission
    // navigate("/admin"); // Uncomment to navigate to a different page after submission
  };

  return isLoading ? null : (
    <BlogsCreateUpdateForm
      initialValues={blog as Blog}
      onSubmit={handleUpdateBlog}
    />
  );
};

export default BlogsUpdateView;
