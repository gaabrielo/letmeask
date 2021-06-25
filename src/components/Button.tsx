import { ButtonHTMLAttributes } from "react";

import { Spinner } from "./Spinner";

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
  isLoading?: boolean;
};

export function Button({
  isOutlined = false,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button className={`button ${isOutlined ? "outlined" : ""}`} {...props}>
      {isLoading ? <Spinner /> : props.children}
    </button>
  );
}
