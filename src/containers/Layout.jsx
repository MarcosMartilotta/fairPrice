import { Outlet } from "react-router";
import NavBar from "../components/NavBar";
import { AppContext } from "../context/AppContext";
import { initialState } from "../initialState";
import { useState } from "react";

export const Layout = () => {
  const [appState, setAppState] = useState(initialState);

  return (
    <AppContext.Provider value={appState}>
      <main>
        <NavBar />
        <Outlet />
      </main>
    </AppContext.Provider>
  );
};

export default Layout;
