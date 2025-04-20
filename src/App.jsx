import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Visites from "./pages/visites";
import VisitesDetails from "./pages/visitesDetails";
import Layout from "./components/Layout";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="visites" element={<Visites />} />
          <Route path="visites/:id" element={<VisitesDetails />} />
          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
