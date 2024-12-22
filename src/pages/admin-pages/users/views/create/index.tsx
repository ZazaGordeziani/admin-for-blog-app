import { addNewUser } from "../../../../users/api/admin";
import UserCreateUpdateForm from "../../components/form/create-update";

const UsersCreateView = () => {
  const initialValues = { email: "", phone: "" };
  const handleNewUser = (values: { email: string; phone: string }) => {
    addNewUser(values);
  };

  return (
    <UserCreateUpdateForm
      initialValues={initialValues}
      onSubmit={handleNewUser}
    />
  );
};

export default UsersCreateView;
