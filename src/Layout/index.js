import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Notification from "../components/Notification";
import { hideNotification } from "../modules/tooltips";
import { connect } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";

const Layout = ({
  isTooltipShown,
  tooltipText,
  tooltipType,
  hideNotification,
}) => {
  return (
    <div className="antialiased font-sans relative min-w-[320px]">
      <Header />

      <main>
        <Outlet />
      </main>

      <div className="fixed z-10 top-full left-1/2 -translate-x-1/2">
        <div
          className={classNames("transition-transform ease-linear", {
            "-translate-y-full": isTooltipShown,
          })}
        >
          <Notification
            text={tooltipText}
            type={tooltipType}
            onClick={() => hideNotification()}
          />
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  hideNotification: PropTypes.func,
  isTooltipShown: PropTypes.bool,
  tooltipText: PropTypes.string,
  tooltipType: PropTypes.string,
};

export default connect(
  (state) => ({
    isTooltipShown: state.tooltipsReducer.isShown,
    tooltipText: state.tooltipsReducer.text,
    tooltipType: state.tooltipsReducer.type,
  }),
  { hideNotification }
)(Layout);
