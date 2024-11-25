import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "primary",
}) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
