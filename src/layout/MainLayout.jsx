import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"


const MainLayout = ({isLoaded}) => {
  const location = useLocation();


  const NavbarPaths = ["/","/website-development-kanpur"];

  const showNav = NavbarPaths.includes(location.pathname)
  return (
    
    <>
    { showNav && <Navbar startAnimation={isLoaded} /> }

      <Outlet/>

    
    </>
  )
}

export default MainLayout