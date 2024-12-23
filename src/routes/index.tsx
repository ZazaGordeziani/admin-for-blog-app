import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../layouts/admin-layout";
import SignIn from "../pages/auth/sign-in";
import { ADMIN_MAIN_ROUTES } from "./admin";

const queryClient = new QueryClient(); // Create a QueryClient instance

export const AppRoutes = () => {
  return (
    <>
      {" "}
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            {/* <div className="App"> */}
            {/* <h1>Blogs</h1>
          <p>Check the console to see the blogs fetched from Supabase.</p>
          <BlogsInfo />
          <UsersInfo /> */}
            <Route path="/" element={<SignIn />} />
            <Route path="admin" element={<AdminLayout />}>
              {ADMIN_MAIN_ROUTES}
            </Route>
          </Routes>
        </BrowserRouter>{" "}
      </QueryClientProvider>
    </>
  );
};
