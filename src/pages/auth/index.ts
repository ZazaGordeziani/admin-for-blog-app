import { supabase } from "../../supabase/index";
import { atom } from "jotai";

export type LoginPayload = {
  payload: { email: string; password: string };
};

export const login = ({ payload }: LoginPayload) => {
  const { email, password } = payload;
  return supabase.auth.signInWithPassword({ email, password }).then((res) => {
    if (
      res?.error &&
      res?.error.status &&
      (res?.error?.status < 200 || res?.error?.status >= 300)
    ) {
      throw new Error("Auth");
    }

    return res;
  });
};

export const logout = () => {
  return supabase.auth.signOut();
};

export const userAtom = atom<any>(null);
