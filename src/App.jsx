import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Contact from "./Pages/Contact";
// import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}

        {/* 404 Page
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;