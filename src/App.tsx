import { Route,  Routes } from "react-router-dom";
import Memotest from "./Memotest";
import WordsPerMinute from "./WordsPerMinute";
import Pokemon from "./Pokemon";

function App() {

  return (
    <Routes>
      <Route element={<Memotest/> } path="/memotest" />
      <Route element={<WordsPerMinute/> } path="/wpm" />
      <Route element={<Pokemon/> } path="/pokemon" />
    </Routes>
    )
}

export default App
