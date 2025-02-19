import UsersList from "../../components/list";
// import { getUsersListInAdmin } from "../../../../users/api/admin";
import { mapUsersListForAdmin } from "../../../../users/api/admin/utils";
// import { useQuery } from "@tanstack/react-query";
import { useGetUsersListInAdmin } from "../../../../../query/admin/users";

const UsersListView = () => {
  // const [users, setUsers] = useState<
  //   {
  //     email: string | undefined;
  //     createdAt: string | undefined;
  //     phone: string | undefined;
  //     lastSignIn: string | undefined;
  //     id: string | number;
  //   }[]
  // >([]);

  // useEffect(() => {
  //   getUsersListInAdmin().then((users) => {
  //     const mappedUser = mapUsersListForAdmin(users);

  //     setUsers(mappedUser);
  //   });
  // }, []);

  const { data: users } = useGetUsersListInAdmin({
    queryOptions: { select: mapUsersListForAdmin },
  });
  return <UsersList users={users || []} />;

  // const getUsers = async () => {
  //   const users = await getUsersListInAdmin();
  //   return mapUsersListForAdmin(users);
  // };

  //   const { data: users } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: getUsers,
  //   });

  //   return <UsersList users={users || []} />;
};

export default UsersListView;
