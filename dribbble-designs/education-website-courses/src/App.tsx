import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CoursePage from "./pages/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
