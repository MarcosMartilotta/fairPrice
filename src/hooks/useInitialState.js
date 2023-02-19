import { useState } from "react";
import { initialState } from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const prueba = (payload) => {
    setState({
      ...state,
      page: { ...state.home, payload },
    });
  };
  return { state, prueba };
};

export default useInitialState;
