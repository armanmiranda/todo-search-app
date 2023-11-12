import React, { lazy, Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import GeneralLayout from "./layouts/generalLayout";
import router from "./routing/router";

export default function App() {
  return (
   <GeneralLayout>
     <Suspense fallback={<div>Loading....</div>}>
       <RouterProvider router={router} />
     </Suspense>
    </GeneralLayout>
  );
}
