import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import { useState } from "react";
import GlobalStyles from "./globalStyles/GlobalStyles";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
function App() {
  const [show, setShow] = useState<boolean>(false);

  const [viewOption, setViewOption] = useState("overview");
  const isMobile = useMediaQuery({ query: `(max-width:768px)` });
  const isTablet = useMediaQuery({ query: `(min-width:768px)` });

  useEffect(() => {
    if (isTablet) {
      setShow(false);
    }
  }, [isTablet]);
  console.log(isTablet);
  return (
    <>
      <GlobalStyles />
      <Header
        show={show}
        setShow={setShow}
        setViewOption={setViewOption}
        viewOption={viewOption}
        isMobile={isMobile}
      />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />}></Route>
        <Route
          path="/:planet"
          element={
            <Planet
              show={show}
              isMobile={isMobile}
              setViewOption={setViewOption}
              viewOption={viewOption}
              isTablet={isTablet}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
