import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

import { RouterProvider } from "react-router-dom";

import { createBrowserRouter} from "react-router-dom";
import { fetchAlbum, fetchArtists } from "./routes/fetchingFunctions";
import Layout from "./Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import AlbumPage from "./pages/common/AlbumPage/AlbumPage";

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
        loader: fetchArtists,
      },
      {
        path: '/album/:albumId',
        element: <AlbumPage />,
        loader: ({ params }) => fetchAlbum(params.albumId),
      }
      // {
      //   path: '/create-playlist',
      //   element: <CreatePlaylistPage />
      // },
      // {
      //   path: '/liked-songs',
      //   element: <LikedSongsPage />
      // },
      // {
      //   path: '/your-episodes',
      //   element: <YourEpisodesPage />
      // }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
  // {
  //   path: "user/:id",
  //   loader: ({ params }) => fetchUser(params.id),
  //   element: <User />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
