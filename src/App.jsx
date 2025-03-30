import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Visites from "./pages/visites";
import VisitesDetails from "./pages/visitesDetails";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="visites" element={<Visites />} />
          <Route path="visites/details" element={<VisitesDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
