import "./App.css";
import AdminLayout from "./layouts/admin-layout";
// import BlogsInfo from "./supabase/blogs";
// import UsersInfo from "./supabase/users";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Add this import
import SignIn from "./pages/auth/sign-in";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./layouts/dashboard-layout";
import UsersListView from "./pages/admin-pages/users/views/list/index";
import UsersUpdateView from "./pages/admin-pages/users/views/update";
import UsersCreateView from "./pages/admin-pages/users/views/create";
import BlogsUpdateView from "./pages/admin-pages/blogs/views/blog-create/blog-update";
import BlogsCreateView from "./pages/admin-pages/blogs/views/blog-create";
import { AuthGuard } from "./pages/admin-pages/blogs/components/create-update/create-update";
const queryClient = new QueryClient(); // Create a QueryClient instance

function App() {
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
              <Route index element={<Dashboard />} />
              <Route
                path="create"
                element={
                  <AuthGuard>
                    <UsersCreateView />
                  </AuthGuard>
                }
              />
              <Route
                path="update/:id"
                element={
                  <AuthGuard>
                    <UsersUpdateView />
                  </AuthGuard>
                }
              />
              <Route
                path="blogsUpdate/:id"
                element={
                  <AuthGuard>
                    <BlogsUpdateView />
                  </AuthGuard>
                }
              />
              <Route
                path="blogsCreate"
                element={
                  <AuthGuard>
                    <BlogsCreateView />
                  </AuthGuard>
                }
              />
              <Route
                path="dashboard"
                element={
                  <AuthGuard>
                    {" "}
                    <Dashboard />
                  </AuthGuard>
                }
              />
              <Route
                path="users"
                element={
                  <AuthGuard>
                    <UsersListView />
                  </AuthGuard>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>{" "}
      </QueryClientProvider>
    </>
  );
}

export default App;
