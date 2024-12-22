import { useParams } from "react-router-dom";
import BlogsCreateUpdateForm from "../../components/create-update/create-update";
import { useEffect, useState } from "react";
import { getSingleBlogInAdmin } from "../..";

const BlogsUpdateView = () => {
  const { id } = useParams();
  // console.log("blog id", id);

  const [blog, setBlog] = useState<{
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }>({
    title_ka: "",
    title_en: "",
    description_ka: "",
    description_en: "",
    image_url: "",
    created_at: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        await getSingleBlogInAdmin(id as string).then((res) => {
          setBlog({
            title_ka: res?.title_ka || "",
            title_en: res?.title_en || "",
            description_ka: res?.description_ka || "",
            description_en: res?.description_en || "",
            image_url: res?.image_url || "",
            created_at: res?.created_at || "",
          });
        });
      } catch (error) {
        console.error("Error happened while fetching blog data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  return isLoading ? null : <BlogsCreateUpdateForm initialValues={blog} />;
};

export default BlogsUpdateView;
