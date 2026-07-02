import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

// Pages
import Home from "./Pages/Home";
import CheckOut from "./Pages/CheckOut";
import Portrait from "./Pages/Portrait";
import About from "./Pages/About";
import TheArtist from "./Pages/TheArtist";
import Collections from "./Pages/Collections";
import NotFound from "./Pages/NotFound";
// import Contact from "./Pages/Contact";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portrait/:id" element={<Portrait />} />
          <Route path="/about-collection" element={<About />} />
          <Route path="/the-artist" element={<TheArtist />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/checkout"
            element={<CheckOut />}
          />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
