import React from "react";
import ReactDOM from "react-dom/client";
import Register from "./Register";
import "./global.css";
import Next_of_kin from "./NextofKin";
import Identification from "./Identification"
import References from "./References"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register/>,
  },
  {
    path: "/NextofKin",
    element: <Next_of_kin />  
  },
  {
    path:"/Identification",
    element: <Identification />
  },
  {
    path:"/References",
    element:<References/>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Register /> */}
  </React.StrictMode>,
)
