import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigateContext = createContext();

const initialRoute = "/";

const NavigateProvider = ({ children }) => {
  const [route, setRoute] = useState(initialRoute);
  const navigate = useNavigate();

  const changeRoute = (route) => {
    setRoute(route);

    navigate(route);
  };
  const data = { route, changeRoute };

  return (
    <NavigateContext.Provider value={data}>{children}</NavigateContext.Provider>
  );
};

export { NavigateProvider };
export default NavigateContext;
