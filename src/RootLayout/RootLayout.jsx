import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <main className="flex-1">
        <Outlet></Outlet>
        <ToastContainer />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
