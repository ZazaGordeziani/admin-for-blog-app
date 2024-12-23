import "./App.css";
// import AdminLayout from "./layouts/admin-layout";
// import BlogsInfo from "./supabase/blogs";
// import UsersInfo from "./supabase/users";
// import { Routes, Route, BrowserRouter } from "react-router-dom"; // Add this import
// import SignIn from "./pages/auth/sign-in";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ADMIN_MAIN_ROUTES } from "./routes/admin";
import { AppRoutes } from "./routes";
// import Dashboard from "./layouts/dashboard-layout";
// import UsersListView from "./pages/admin-pages/users/views/list/index";
// import UsersUpdateView from "./pages/admin-pages/users/views/update";
// import UsersCreateView from "./pages/admin-pages/users/views/create";
// import BlogsUpdateView from "./pages/admin-pages/blogs/views/blog-create/blog-update";
// import BlogsCreateView from "./pages/admin-pages/blogs/views/blog-create";
// import { AuthGuard } from "./pages/admin-pages/blogs/components/create-update/create-update";
// const queryClient = new QueryClient(); // Create a QueryClient instance

function App() {
  return <AppRoutes />;
}

export default App;
