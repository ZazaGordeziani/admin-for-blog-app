// import BlogsCreateUpdateForm from "../../components/create-update";

import BlogsCreateUpdateForm from "../../components/create-update/create-update";
import { addNewBlog } from "../../components/create-update/index";
const BlogsCreateView = () => {
  const initialValues = {
    title_ka: "",
    title_en: "",
    description_ka: "",
    description_en: "",
    image_url: "",
    created_at: "",
  };

  const handleNewBlog = (values: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }) => {
    addNewBlog(values);
  };

  return (
    <BlogsCreateUpdateForm
      initialValues={initialValues}
      onSubmit={handleNewBlog}
    />
  );
};

export default BlogsCreateView;
