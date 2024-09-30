import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import DevPage from "./pages/Dev/DevPage.jsx";
import PhotohtaphyPage from "./pages/Photography/PhotohtaphyPage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";

const router = createBrowserRouter([
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
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <div>404 Not Found</div>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
