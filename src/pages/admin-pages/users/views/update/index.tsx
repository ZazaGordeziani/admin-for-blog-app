import UserCreateUpdateForm from "../../components/form/create-update";
import {
  getSingleUserInAdmin,
  updateUserInAdmin,
} from "../../../../users/api/admin/index";
import { useNavigate, useParams } from "react-router-dom";
import UsersCreateUpdateFormSkeleton from "./skeleton";
import { useQuery } from "@tanstack/react-query";
const UsersUpdateView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // const [user, setUser] = useState<{ email: string; phone: string }>({
  //   email: "",
  //   phone: "",
  // });

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getSingleUserInAdmin(id as string)
  //     .then((res) => {
  //       console.log(res);
  //       setUser({ email: res?.email || "", phone: res?.phone || "" });
  //     })
  //     .finally(() => {
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 2000);
  //     });
  // }, [id]);

  const getSingleUser = async () => {
    const res = await getSingleUserInAdmin(id as string);
    return res;
  };

  const { data: userData, isLoading } = useQuery({
    queryKey: ["user", id],
    queryFn: getSingleUser,
    enabled: !!id,
  });

  const handleSubmit = (values: { email: string; phone: string }) => {
    updateUserInAdmin(id as string, values)
      .then(() => {
        navigate("/admin/users");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  return isLoading ? (
    <UsersCreateUpdateFormSkeleton />
  ) : (
    <UserCreateUpdateForm
      initialValues={{
        email: userData?.email || "",
        phone: userData?.phone || "",
      }}
      onSubmit={handleSubmit}
    />
  );
};

export default UsersUpdateView;
