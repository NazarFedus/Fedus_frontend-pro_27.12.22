import React from "react";
import { createBrowserRouter, redirect, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import axios from "axios";

const homeLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) return redirect("/register");

  try {
    const user = await axios.get(`http://localhost:3000/users`);
    return user.data[user.data.length - 1];
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    loader: homeLoader
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/login",
    Component: Login,
  },
]);


