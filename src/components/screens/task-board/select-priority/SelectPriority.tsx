import { FC } from "react";
import classNames from "classnames";
import styles from "./SelectPriority.module.scss";
import { PriorityType } from "./../../../../interfaces/task.interface";

interface Props {
  value?: PriorityType;
  setValue: (value: PriorityType) => void;
  className?: string;
}

export const priorities: PriorityType[] = ["high", "medium", "low"];

const SelectPriority: FC<Props> = ({ value, setValue, className }) => {
  return (
    <div className={`${styles.priorities} ${className}`}>
      {priorities.map((priority) => {
        const colors = classNames(
          { pink: priority === "high" },
          { orange: priority === "medium" },
          { green: priority === "low" }
        );

        return (
          <button
            key={priority}
            onClick={() => setValue(priority)}
            className={
              priority === value
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
