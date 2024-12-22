import { fetchUsers } from "./utils";

const UsersInfo = () => {
  fetchUsers();
  return <div>users</div>;
};

export default UsersInfo;
