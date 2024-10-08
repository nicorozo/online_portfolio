import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import DevPage from "./pages/Dev/DevPage.jsx";
import PhotohtaphyPage from "./pages/Photography/PhotohtaphyPage.jsx";

const router = createHashRouter([
  /*  {
    path: "/",
    element: <Navigate to="/online_portfolio" replace />, // Redirect from "/" to "/online_portfolio"
  }, */
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/dev",
    element: <DevPage></DevPage>,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/photography",
    element: <PhotohtaphyPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
