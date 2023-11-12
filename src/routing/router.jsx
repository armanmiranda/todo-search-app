import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const TopPage = lazy(() => import("@/views/TopPage"));
const TodoDetailPage = lazy(() => import("@/views/TodoDetailPage"));

const router = createBrowserRouter([{
  errorElement: <>Page not found.</>,
  children: [
    { path: "/", element: <TopPage /> },
    { path: "/:id", element: <TodoDetailPage />}
  ]
}]);


export default router;
