import { redirect } from "react-router-dom";
import { getDogs, getDog } from "./api.jso";
import DogFinderApp from "./DogFinderApp.jso";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

const routes = [
  {
    id: "root",
    element: <DogFinderApp />,
    loader: getDogs,
    children: [
      { path: "/dogs", element: <DogList />,},
        {path: "/dogs/:name",element: <DogDetails />,
        loader: async function ({ params }) {
          try {
            return await fetchDog(params.name);
          } catch {
            return redirect("/dogs");
          }
        },
      },
    ],
  },
];

export default routes;