import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import AIChatbot from "../components/AIChatbot";
import Footer from "../components/Home/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <AIChatbot />

      <Footer />
    </>
  );
};

export default Layout;