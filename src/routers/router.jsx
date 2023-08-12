import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);