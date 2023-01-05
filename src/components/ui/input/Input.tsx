import React, { FC } from "react";
import styles from "./Input.module.scss";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <input
        value={value}
        onChange={onChange}
        type="text"
        className={styles.input}
        required
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
};

export default Input;
