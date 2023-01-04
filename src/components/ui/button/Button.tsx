import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  w?: string;
}

const Button: FC<Props> = ({ children, onClick, w }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
