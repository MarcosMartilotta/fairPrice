import { useState, useContext } from "react";
import NavigateContext from "../context/navigateContext";
import { StyledBudgetPage } from "../styled-components/styledBudgetPage";

const BudgetPage = () => {
  const [budget, setBudget] = useState("");
  const [error, setError] = useState(false);
  const { changeRoute } = useContext(NavigateContext);

  const handleChange = (newValue) => {
    setBudget(newValue);
  };

  const sendRequest = () => {
    if (budget > 0) {
      setError(false);
      changeRoute("/questionnarie/results");
    } else {
      setError(true);
    }
  };
  return (
    <StyledBudgetPage>
      <div className="hero">
        <h2>¿Cual es su presupuesto?</h2>
      </div>
      <div className="input-section">
        <input
          type="number"
          placeholder="Ej: $90000"
          value={budget}
          onChange={(event) => handleChange(event.target.value)}
        />
        {error ? (
          <p className="error">Ingrese un monto válido</p>
        ) : (
          <p>Ingrese el monto que desea pagar mensualmente</p>
        )}
      </div>
      <button type="button" onClick={() => sendRequest()}>
        Muéstrame las propiedades que más me convienen
      </button>
    </StyledBudgetPage>
  );
};

export default BudgetPage;
