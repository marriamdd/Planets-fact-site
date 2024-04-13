import Header from "./components/Header";
import { Routes, Route, Navigate } from "react-router";
import Planet from "./components/Planet";
import GlobalStyles from "./globalStyles/GlobalStyles";
function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={"/Earth"} />}></Route>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
