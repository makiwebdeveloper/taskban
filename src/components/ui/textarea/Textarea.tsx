import { FC } from "react";
import styles from "./Textarea.module.scss";

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea: FC<Props> = ({ placeholder, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <textarea
        value={value}
        onChange={onChange}
        className={styles.textarea}
        required
      />
      <label className={styles.label}>{placeholder}</label>
    </div>
  );
};

export default Textarea;
