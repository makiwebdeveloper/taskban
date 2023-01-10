import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  red?: boolean;
}

const Button: FC<Props> = ({ children, onClick, className, red }) => {
  return (
    <button
      className={`${red ? styles.redBtn : styles.blueBtn} ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
