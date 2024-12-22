import { supabase } from "../../../../supabase";

export const getUsersListInAdmin = async (): Promise<User[]> => {
  const res = await supabase.auth.admin.listUsers();
  return res.data.users as User[];
};
// return res.data;

export const updateUserInAdmin = (
  id: string,
  payload: { email: string; phone: string }
) => {
  return supabase.auth.admin.updateUserById(id, { ...payload });
};
export const getSingleUserInAdmin = (id: string) => {
  return supabase.auth.admin.getUserById(id).then((res) => {
    return res.data.user;
  });
};

export const addNewUser = (payload: { email: string; phone: string }) => {
  supabase.auth.admin.createUser(payload);
};

export type User = {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmation_sent_at: string;
  confirmed_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string;
  };
  user_metadata: object;

  identities: [];
  created_at: string;
  updated_at: string;
  is_anonymous: boolean;
};
