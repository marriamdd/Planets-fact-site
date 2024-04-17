import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import { useState } from "react";
import GlobalStyles from "./globalStyles/GlobalStyles";
import { useMediaQuery } from "react-responsive";
function App() {
  const [viewOption, setViewOption] = useState("overview");
  const isMobile = useMediaQuery({ query: `(max-width:768px)` });
  const isTablet = useMediaQuery({ query: `(min-width:768px)` });
  return (
    <>
      <GlobalStyles />
      <Header
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
