import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { PropsWithChildren } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
// import { updateBlogInAdmin } from "../../../blogs/index";
import { useAtom } from "jotai";
import { userAtom } from "../../../../auth";
const { Item } = Form;

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [user] = useAtom(userAtom);

  if (user) {
    // console.log(user);

    return children || <Outlet />;
  }
  return <Navigate to="/" />;
};
export interface BlogCreateUpdateFormProps {
  initialValues: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  };
  onSubmit: (values: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }) => void;
}

const BlogsCreateUpdateForm: React.FC<BlogCreateUpdateFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  // const { id } = useParams();

  const navigate = useNavigate();
  const [form] = useForm();

  const handleSubmit = (values: {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
    image_url: string;
    created_at: string;
  }) => {
    // updateBlogInAdmin(id as string, values);
    onSubmit(values);

    navigate(`/admin`);
  };

  return (
    <Form<{
      title_ka: string;
      title_en: string;
      description_ka: string;
      description_en: string;
      image_url: string;
      created_at: string;
    }>
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      name="wrap"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item
        label="სათაური ქართულად"
        name="title_ka"
        rules={[{ required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="Title in English"
        name="title_en"
        rules={[{ required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="აღწერა ქართულად"
        name="description_ka"
        rules={[{ required: true }]}
      >
        <Input />
      </Item>
      <Item
        label="Description in English"
        name="description_en"
        rules={[{ required: true }]}
      >
        <Input />
      </Item>

      <Item label="image URL" name="image_url" rules={[{ required: true }]}>
        <Input />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogsCreateUpdateForm;
