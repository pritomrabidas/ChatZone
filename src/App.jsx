import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Layout from "./Components/Layout";
import Profile from "./Components/Pages/Profile";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={< Profile/>}></Route>
          </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App
