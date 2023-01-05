import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const Button: FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`${styles.btn} ${className} `} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
