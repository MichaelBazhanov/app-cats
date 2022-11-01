import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="antialiased font-sans">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
