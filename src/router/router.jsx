import { createBrowserRouter } from "react-router";
import App from "../App";
import ShowPeople from "../components/ShowPeople";
import UpdatePeople from "../components/UpdatePeople";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/people",
    element: <ShowPeople/>
  },
  {
    path: "/people/:id",
    element: <UpdatePeople/>,
    loader:({params})=>fetch(`http://localhost:5002/people/${params.id}`)
  },
]);

export default router