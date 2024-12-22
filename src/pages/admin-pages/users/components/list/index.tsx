import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useNavigate } from "react-router-dom";
const { Column } = Table;

const UsersList: React.FC<{
  users: {
    email: string | undefined;
    createdAt: string | undefined;
    phone: string | undefined;
    lastSignIn: string | undefined;
    id: string | number;
  }[];
}> = ({ users }) => {
  const navigate = useNavigate();

  const handleNavigateToUserEdit = (id: string | number) => {
    navigate(`/admin/update/${id}`);
  };

  const handleAddUser = () => {
    navigate("/admin/create");
  };

  return (
    <Table
      title={() => (
        <Button type="primary" icon={<PlusOutlined />} onClick={handleAddUser}>
          Add User
        </Button>
      )}
      bordered
      dataSource={users}
    >
      <Column title="email" dataIndex="email" />
      <Column title="createdAt" dataIndex="createdAt" />
      <Column title="phone" dataIndex="phone" />
      <Column title="Last Sign In" dataIndex="lastSignIn" />
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined
              className=" flex justify-center text-xl text-amber-400 cursor-pointer"
              onClick={() => {
                handleNavigateToUserEdit(row?.id);
              }}
            />
          );
        }}
      />
    </Table>
  );
};

export default UsersList;
