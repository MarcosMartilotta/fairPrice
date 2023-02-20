import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import PaginationBar from "../components/PaginationBar";
import { NavigateProvider } from "../context/navigateContext";
export const Layout = () => {
  return (
    <NavigateProvider>
      <main>
        <NavBar />
        <Outlet />
        <PaginationBar />
      </main>
    </NavigateProvider>
  );
};

export default Layout;
