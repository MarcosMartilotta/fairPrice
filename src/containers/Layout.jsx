import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

export const Layout = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
