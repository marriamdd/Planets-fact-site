import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import { useState } from "react";
import GlobalStyles from "./globalStyles/GlobalStyles";
export interface IViewOptions {
  overview: boolean;
  structure: boolean;
  surface: boolean;
  [key: string]: boolean;
}
function App() {
  const [viewOption, setViewOption] = useState({
    overview: false,
    structure: false,
    surface: false,
  });
  console.log(viewOption);
  return (
    <>
      <GlobalStyles />
      <Header setViewOption={setViewOption} viewOption={viewOption} />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />}></Route>
        <Route
          path="/:planet"
          element={
            <Planet setViewOption={setViewOption} viewOption={viewOption} />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
