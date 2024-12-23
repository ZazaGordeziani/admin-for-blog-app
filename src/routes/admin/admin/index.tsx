import { Route } from "react-router-dom";
// import UsersCreateView from ;

import { lazy, Suspense } from "react";
import { ADMIN_PATHS } from "../index.enum";
import { AuthGuard } from "../../../pages/admin-pages/blogs/components/create-update/create-update";

// eslint-disable-next-line react-refresh/only-export-components
const UsersCreateView = lazy(
  () => import("../../../pages/admin-pages/users/views/create")
);
// eslint-disable-next-line react-refresh/only-export-components
const UsersUpdateView = lazy(
  () => import("../../../pages/admin-pages/users/views/update")
);
// eslint-disable-next-line react-refresh/only-export-components
const BlogsUpdateView = lazy(
  () => import("../../../pages/admin-pages/blogs/views/blog-create/blog-update")
);
// eslint-disable-next-line react-refresh/only-export-components
const BlogsCreateView = lazy(
  () => import("../../../pages/admin-pages/blogs/views/blog-create")
);
// eslint-disable-next-line react-refresh/only-export-components
const Dashboard = lazy(() => import("../../../layouts/dashboard-layout"));
// eslint-disable-next-line react-refresh/only-export-components
const UsersListView = lazy(
  () => import("../../../pages/admin-pages/users/views/list")
);

export const ADMIN_ROUTES = [
  <>
    <Route index element={<Dashboard />} />
    <Route
      path={ADMIN_PATHS.USERS_CREATE}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <UsersCreateView />
          </AuthGuard>
        </Suspense>
      }
    />
    <Route
      path={ADMIN_PATHS.USERS_UPDATE + "/:id"}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <UsersUpdateView />
          </AuthGuard>
        </Suspense>
      }
    />
    <Route
      path={ADMIN_PATHS.BLOGS_UPDATE + "/:id"}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <BlogsUpdateView />
          </AuthGuard>
        </Suspense>
      }
    />
    <Route
      path={ADMIN_PATHS.BLOGS_CREATE}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <BlogsCreateView />
          </AuthGuard>
        </Suspense>
      }
    />
    <Route
      path={ADMIN_PATHS.DASHBOARD}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <Dashboard />
          </AuthGuard>
        </Suspense>
      }
    />
    <Route
      path={ADMIN_PATHS.USERS_LIST}
      element={
        <Suspense fallback={<div>Loading...</div>}>
          <AuthGuard>
            <UsersListView />
          </AuthGuard>
        </Suspense>
      }
    />
  </>,
];
