import { FC } from "react";
import styles from "./DateInput.module.scss";

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  className?: string;
}

const DateInput: FC<Props> = ({ value, onChange, type, className }) => {
  return (
    <input
      className={styles.dateInput + " " + className}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default DateInput;
