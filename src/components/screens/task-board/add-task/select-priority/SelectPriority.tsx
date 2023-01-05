import { FC } from "react";
import classNames from "classnames";
import styles from "./SelectPriority.module.scss";
import { priorities } from "../add-task.data";
import { FormDataType } from "../form-data.type";

interface Props {
  formData: FormDataType;
  setFormData: (value: FormDataType) => void;
}

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
