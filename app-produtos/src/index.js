import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Listagem from "./pages/listagem";
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Cadastro from "./pages/cadastro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Listagem />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },

  {
    path: "/cadastro/:id",
    element: <Cadastro />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
