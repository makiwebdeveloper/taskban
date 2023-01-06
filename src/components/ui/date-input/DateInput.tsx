import { FC } from "react";
import styles from "./DateInput.module.scss";

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
}

const DateInput: FC<Props> = ({ value, onChange, type }) => {
  return (
    <input
      className={styles.dateInput}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default DateInput;
