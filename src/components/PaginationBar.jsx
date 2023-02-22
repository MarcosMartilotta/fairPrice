import { useContext } from "react";
import NavigateContext from "../context/navigateContext";
import { StyledPaginationBar } from "../styled-components/styledPaginationBar";
import bottomWave from "../assets/bottomWave.svg";

const PaginationBar = () => {
  const { route } = useContext(NavigateContext);

  return (
    <StyledPaginationBar>
      <div className="circle"></div>
      {route === "/questionnarie/ambients" ||
      route === "/questionnarie/type" ||
      route === "/questionnarie/budget" ||
      route === "/questionnarie/results" ||
      route === "/" ? (
        <>
          {route === "/questionnarie/ambients" ||
          route === "/questionnarie/type" ||
          route === "/questionnarie/budget" ||
          route === "/questionnarie/results" ? (
            <>
              <div className="union one pinted-line"></div>
              <div className="circle one pinted-ball"></div>
            </>
          ) : (
            <>
              <div className="union one"></div>
              <div className="circle one"></div>
            </>
          )}

          {route === "/questionnarie/type" ||
          route === "/questionnarie/budget" ||
          route === "/questionnarie/results" ? (
            <>
              <div className="union two pinted-line"></div>
              <div className="circle two pinted-ball"></div>
            </>
          ) : (
            <>
              <div className="union two"></div>
              <div className="circle two"></div>
            </>
          )}

          {route === "/questionnarie/budget" ||
          route === "/questionnarie/results" ? (
            <>
              <div className="union three pinted-line"></div>
              <div className="circle three pinted-ball"></div>
            </>
          ) : (
            <>
              <div className="union three"></div>
              <div className="circle three"></div>
            </>
          )}

          {route === "/questionnarie/results" ? (
            <>
              <div className="union four pinted-line"></div>
              <div className="circle four pinted-ball"></div>
            </>
          ) : (
            <>
              <div className="union four"></div>
              <div className="circle four"></div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="union pinted-line"></div>
          <div className="circle"></div>
        </>
      )}
      <div className="bottomWave">
        <img src={bottomWave} alt="" />
      </div>
    </StyledPaginationBar>
  );
};

export default PaginationBar;
