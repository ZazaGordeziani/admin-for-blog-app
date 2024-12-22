import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserInAdmin } from "../../../../../users/api/admin";

const { Item } = Form;

interface UserCreateUpdateFormProps {
  initialValues: { email: string; phone: string };
  onSubmit: (values: { email: string; phone: string }) => void;
}

const UserCreateUpdateForm: React.FC<UserCreateUpdateFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const { id } = useParams();
  const [form] = useForm<{ email: "string"; phone: "string" }>();
  const navigate = useNavigate();

  const handleSubmit = (values: { email: "string"; phone: "string" }) => {
    updateUserInAdmin(id as string, values);
    onSubmit(values);
    navigate("/admin/users");
  };

  return (
    <Form
      initialValues={initialValues}
      form={form}
      onFinish={handleSubmit}
      // name="wrap"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      // labelWrap
      // wrapperCol={{ flex: 1 }}
      // colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item label="Email" name="email" rules={[{ required: true }]}>
        <Input placeholder="Enter E-mail" />
      </Item>

      <Item label="Phone Number" name="phone" rules={[{ required: true }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default UserCreateUpdateForm;
