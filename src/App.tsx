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
import BlogsCreateUpdateForm from "./pages/admin-pages/blogs/components/create-update";
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
              <Route path="create" element={<UsersCreateView />} />
              <Route path="update/:id" element={<UsersUpdateView />} />
              <Route
                path="blogsUpdate/:id"
                element={<BlogsCreateUpdateForm />}
              />
              <Route path="blogsCreate" element={<BlogsCreateUpdateForm />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<UsersListView />} />
            </Route>
          </Routes>
        </BrowserRouter>{" "}
      </QueryClientProvider>
    </>
  );
}

export default App;
