import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

import { RouterProvider } from "react-router-dom";

import { createBrowserRouter, useLoaderData } from "react-router-dom";
import { fetchUsers, fetchUser } from "./routes/fetchingFunctions";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />
      },
      {
        path: '/library',
        element: <LibraryPage />,
        loader: fetchUsers,
      },

    ]

  },
  {

  },
  // {
  //   path: '/users',
  //   loader: fetchUsers,
  //   element: <Users />
  // }
  // {
  //   path: "user/:id",
  //   loader: ({ params }) => fetchUser(params.id),
  //   element: <User />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
