import PropTypes from "prop-types";
import { connect } from "react-redux";
import Notification from "../components/Notification";
import classNames from "classnames";
import { hideNotification } from "../../../modules/tooltips";


const NotificationContainer = ({
  isTooltipShown,
  tooltipText,
  tooltipType,
  hideNotification,
}) => {
  return (
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
  );
};

NotificationContainer.propTypes = {
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
)(NotificationContainer);
