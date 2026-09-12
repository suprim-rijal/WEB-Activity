// src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="tours" element={<Tours />} />
          <Route path="about" element={<About />} />
          <Route path="registration" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
