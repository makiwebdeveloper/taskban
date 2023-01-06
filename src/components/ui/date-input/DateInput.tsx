import { FC } from "react";
import styles from "./DateInput.module.scss";

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const DateInput: FC<Props> = ({ value, onChange }) => {
  return (
    <input
      className={styles.dateInput}
      value={value}
      onChange={onChange}
      type={"date"}
    />
  );
};

export default DateInput;
