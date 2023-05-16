import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";

export const router = createBrowserRouter([
     {
       path: "/",
       Component: Home
     },
     {
       path: "register",
       Component: Register
     },
     {
      path: "login",
      Component: Login
     }
   ]);