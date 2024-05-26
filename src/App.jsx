import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import Layout from "./Components/Layout";
import Profile from "./Components/Pages/Profile";
import Signin from "./Components/Signin";
import SignUP from "./Components/SignUP";
import Home from "./Components/Pages/Home";
import People from "./Components/Pages/People";
import Request from "./Components/Pages/Request";
import Friend from "./Components/Pages/Friend";
import Block from "./Components/Pages/Block";
import Group from "./Components/Pages/Group";
import Chat from "./Components/Pages/Chat";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<SignUP/>}></Route>
        <Route path="/" element={<Layout />}>
          <Route path="/profile" element={< Profile/>}></Route>
          <Route index element={< Home/>}></Route>
          <Route path="/chat" element={< Chat/>}></Route>
          <Route path="/people" element={< People/>}></Route>
          <Route path="/request" element={< Request/>}></Route>
          <Route path="/friend" element={< Friend/>}></Route>
          <Route path="/block" element={< Block/>}></Route>
          <Route path="/group" element={< Group/>}></Route>
          </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App
