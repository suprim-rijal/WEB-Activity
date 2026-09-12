// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <Hero />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
