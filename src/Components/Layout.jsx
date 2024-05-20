import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
// import Header from "./Header"

const Layout = () => {
  return (
    <div className="">
      {/* <div className="">
        <Header/>
    </div> */}
    <div className="">
      <Navbar/>
      <Outlet/>
    </div>
    </div>
  )
}

export default Layout
