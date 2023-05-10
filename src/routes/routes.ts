import {
  createBrowserRouter,
  useLoaderData,
} from "react-router-dom";
import { fetchUsers } from "./fetchingFunctions";
import App from "../App";

const loader = () => {
     return fetchUsers();
}

export function Albums() {
     const users = useLoaderData();
     // ...
   }

const router = createBrowserRouter([
     {
          path: '/',
          loader: loader,
          element:
     }
])

export default router;
