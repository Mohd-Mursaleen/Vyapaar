import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BusinessList from "./component/BusinessList";
import Loan from "./component/Loan";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BusinessList />} />
        <Route path="/loan/:id" element={<Loan />} />
      </Routes>
    </Router>
  );
}

export default App;
