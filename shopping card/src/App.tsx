import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Navbar from "./companents/Navbar";
import { ShoppingCardProvider } from './context/ShoppingCard';

function App() {
  return (
    <ShoppingCardProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Container>
    </ShoppingCardProvider>
  );
}

export default App;
