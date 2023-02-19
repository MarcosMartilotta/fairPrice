import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { NavigateProvider } from "../context/navigateContext";

export const Layout = () => {
  return (
    <NavigateProvider>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </NavigateProvider>
  );
};

export default Layout;
