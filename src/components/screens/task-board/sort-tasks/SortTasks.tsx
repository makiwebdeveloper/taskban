import { FC } from "react";
import { Button, DateInput } from "../../../ui";
import styles from "./SortTasks.module.scss";

interface Props {
  sortDate: string;
  setSortDate: (value: string) => void;
}

const SortTasks: FC<Props> = ({ sortDate, setSortDate }) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Sort by month:</p>
      <DateInput
        value={sortDate}
        onChange={(e) => setSortDate(e.target.value)}
        type="month"
      />
      <Button onClick={() => setSortDate("")} className="px-4 py-1" red>
        Clear sort
      </Button>
    </div>
  );
};

export default SortTasks;
