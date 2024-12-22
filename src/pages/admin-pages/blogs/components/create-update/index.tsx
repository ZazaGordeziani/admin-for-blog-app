import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

const { Item } = Form;
const BlogsCreateUpdateForm = () => {
  const [form] = useForm();

  const handleSubmit = (values: []) => {
    console.log(values);
  };
  return (
    <Form
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
