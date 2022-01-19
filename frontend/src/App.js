import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Services, Error, Contact } from "./pages";
import {Navbar, SingleService} from './components'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services/:id" element={<Services/>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </Router>
  );
}

export default App;
