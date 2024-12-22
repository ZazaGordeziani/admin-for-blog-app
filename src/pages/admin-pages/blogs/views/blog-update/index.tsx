import { useParams } from "react-router-dom";
import BlogsCreateUpdateForm from "../../components/create-update";
import { useEffect, useState } from "react";
import { getSingleBlogInAdmin } from "../..";

const BlogsUpdateView = () => {
  const { id } = useParams();

  const [user, setUser] = useState<{
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
    getSingleBlogInAdmin(id as number | string)
      .then((res) => {
        setUser({
          title_ka: res?.title_ka || "",
          title_en: res?.title_en || "",
          description_ka: res?.description_ka || "",
          description_en: res?.description_en || "",
          image_url: res?.image_url || "",
          created_at: res?.created_at || "",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return isLoading ? null : <BlogsCreateUpdateForm initialValues={user} />;
};

export default BlogsUpdateView;
