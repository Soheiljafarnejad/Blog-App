import { TextField } from "@mui/material";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { useState } from "react";

const CustomTextField = ({
  name,
  value,
  onChange,
  error,
  label,
  onBlur,
  fullWidth,
  className,
  type = "text",
  startIcon,
  endIcon,
  clickStartIcon,
  clickEndIcon,
}) => {
  const [toggle, setToggle] = useState(false);

  const StartIconHandler = () => {
    clickStartIcon && clickStartIcon();
  };

  const EndIconHandler = () => {
    if (type === "password") setToggle(!toggle);
    clickEndIcon && clickEndIcon();
  };

  return (
    <TextField
      className={className}
      fullWidth={fullWidth}
      onBlur={onBlur && onBlur}
      error={error}
      type={toggle ? "text" : type}
      id="outlined-error"
      label={label}
      name={name}
      size="small"
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: <span onClick={StartIconHandler}>{startIcon}</span>,
        endAdornment: (
          <span onClick={EndIconHandler}>
            {type === "password" ? toggle ? <EyeOffIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" /> : endIcon}
          </span>
        ),
      }}
    />
  );
};

export default CustomTextField;
