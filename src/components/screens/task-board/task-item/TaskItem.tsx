import { FC } from "react";
import { ITask } from "../../../../interfaces/task.interface";
import styles from "./TaskItem.module.scss";
import { AiOutlineClockCircle } from "react-icons/ai";
import classNames from "classnames";

interface Props {
  task: ITask;
  onClick?: () => void;
}

const TaskItem: FC<Props> = ({ task, onClick }) => {
  return (
    <div onClick={onClick} className={styles.task}>
      <div>
        <p className={styles.title}>{task.title}</p>
        <p className={styles.subject}>{task.subject}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className={styles.date}>
          {task.dateOfCompletion && <AiOutlineClockCircle />}{" "}
          {task.dateOfCompletion}
        </p>
        <p
          className={`${styles.priority} ${classNames({
            "bg-pink": task.priority === "high",
            "bg-orange": task.priority === "medium",
            "bg-green": task.priority === "low",
          })}`}
        >
          {task.priority}
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
