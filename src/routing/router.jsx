import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { rootLoader } from "@/api/rootLoader";
import { todoItemLoader } from "@/api/todoItemLoader";

const TopPage = lazy(() => import("@/views/TopPage"));
const TodoDetailPage = lazy(() => import("@/views/TodoDetailPage"));

const router = createBrowserRouter([{
  errorElement: <>Page not found.</>,
  children: [
    {
      path: "/",
      element: <TopPage />,
      loader: rootLoader
    },
    {
      path: "/:id",
      element: <TodoDetailPage />,
      loader: todoItemLoader
    }
  ]
}]);


export default router;
