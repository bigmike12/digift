import React from "react";
import Icon from "../../Icon";

const Button = ({ title, icon, className, iconStyle, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {title}
      {icon && <Icon className={iconStyle} name={icon} />}
    </button>
  );
};

export default Button;
