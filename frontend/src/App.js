import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Services, Error, Contact, Business } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/business" element={<Business />} />
        <Route path="/knowus" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </Router>
  );
}

export default App;
