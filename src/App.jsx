import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Layout from "./Components/Layout";
import Profile from "./Components/Pages/Profile";
import Signin from "./Components/Signin";
import SignUP from "./Components/SignUP";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<SignUP/>}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={< Profile/>}></Route>
          </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App
