import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import NotificationContainer from "../../containers/notification/NotificationContainer";

const Layout = () => {
  return (
    <div className="antialiased font-sans relative min-w-[320px] grid auto-cols-fr grid-rows-[auto_1fr_auto] h-screen">
      <Navigation />

      <main>
        <Outlet />
      </main>

      <NotificationContainer />
    </div>
  );
};

export default Layout;
