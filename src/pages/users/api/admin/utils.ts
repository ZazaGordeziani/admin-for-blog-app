import { User } from "@supabase/supabase-js";
import dayjs from "dayjs";

export const mapUsersListForAdmin = (users: User[]) => {
  return users?.map((user) => ({
    key: user.id,
    id: user?.id,
    email: user?.email,
    createdAt: dayjs(user?.created_at).format("YYYY-MM-DD HH:mm"),
    phone: user?.phone,
    lastSignIn: user?.last_sign_in_at,
  }));
};
