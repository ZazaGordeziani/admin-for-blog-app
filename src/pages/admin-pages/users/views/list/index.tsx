import { useEffect, useState } from "react";
import UsersList from "../../components/list";
import { getUsersListInAdmin } from "../../../../users/api/admin";
import { mapUsersListForAdmin } from "../../../../users/api/admin/utils";

const UsersListView = () => {
  const [users, setUsers] = useState<
    {
      email: string | undefined;
      createdAt: string | undefined;
      phone: string | undefined;
      lastSignIn: string | undefined;
      id: string | number;
    }[]
  >([]);

  useEffect(() => {
    getUsersListInAdmin().then((users) => {
      const mappedUser = mapUsersListForAdmin(users);

      setUsers(mappedUser);
    });
  }, []);
  return <UsersList users={users} />;
};

export default UsersListView;
