import React, { HTMLAttributes } from "react";
import PropTypes from "prop-types";

import style from "./input.module.scss";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  type?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  name,
  ...rest
}) => (
  <div className={style.FormItem}>
    <input
      className={style.FormText}
      name={name}
      value={value}
      type={type}
      {...rest}
    />
    {label && (
      <label className={style.FormLabel} htmlFor={String(rest.id)}>
        {label}
      </label>
    )}
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  // eslint-disable-next-line no-void
  name: void 0,
};
