import Header from "./components/Header";
import { Routes, Route } from "react-router";
import Planet from "./components/Planet";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:planet" element={<Planet />}></Route>
      </Routes>
    </>
  );
}

export default App;
