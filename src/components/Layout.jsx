import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => (
  <div>
    <Navbar />
    <main className="pt-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <Outlet />
    </main>
  </div>
);

export default Layout;
