import { FC } from "react";
import classNames from "classnames";
import styles from "./SelectPriority.module.scss";
import { AddTaskDataType } from "../add-task.type";
import { PriorityType } from "../../../../../interfaces/task.interface";

interface Props {
  formData: AddTaskDataType;
  setFormData: (value: AddTaskDataType) => void;
}

export const priorities: PriorityType[] = ["high", "medium", "low"];

const SelectPriority: FC<Props> = ({ formData, setFormData }) => {
  return (
    <div className={styles.priorities}>
      {priorities.map((priority) => {
        const colors = classNames(
          { pink: priority === "high" },
          { orange: priority === "medium" },
          { green: priority === "low" }
        );

        return (
          <button
            key={priority}
            onClick={() => setFormData({ ...formData, priority })}
            className={
              priority === formData.priority
                ? `bg-${colors} text-white`
                : `border border-dark-gray text-dark-gray`
            }
          >
            {priority}
          </button>
        );
      })}
    </div>
  );
};

export default SelectPriority;
