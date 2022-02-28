import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Services,
  Error,
  Contact,
  Business,
  Product,
} from "./pages";
import { Navbar, Footer, SingleProduct, ContactButton } from "./components";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services/:id" element={<Services />} />
        <Route path="/business/:id" element={<Business />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/knowus" element={<About></About>} />
        {/* <Route path="/products" element={<Product></Product>} /> */}
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
      <ContactButton />
      <Footer />
    </Router>
  );
}

export default App;
