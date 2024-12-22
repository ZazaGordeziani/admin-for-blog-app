// import BlogsCreateUpdateForm from "../../components/create-update";

import BlogsCreateUpdateForm from "../../components/create-update/create-update";

const BlogsCreateView = () => {
  return (
    <BlogsCreateUpdateForm
      initialValues={{
        title_ka: "",
        title_en: "",
        description_ka: "",
        description_en: "",
        image_url: "",
        created_at: "",
      }}
    />
  );
};

export default BlogsCreateView;
