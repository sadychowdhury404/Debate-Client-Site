import { createBrowserRouter } from "react-router";
import App from "../App";
import ShowPeople from "../components/ShowPeople";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/people",
    element: <ShowPeople/>
  },
]);

export default router