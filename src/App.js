import Business from "./Pages/Business/business";
import Personal from "./Pages/Personal/personal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </Router>
  );
}

export default App;
