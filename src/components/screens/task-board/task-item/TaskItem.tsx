import { FC } from "react";
import { ITask } from "../../../../interfaces/task.interface";
import styles from "./TaskItem.module.scss";
import { AiOutlineClockCircle, AiOutlineEdit } from "react-icons/ai";
import { CgMore } from "react-icons/cg";
import classNames from "classnames";

interface Props {
  task: ITask;
  onClick?: () => void;
  setIsEditTask: (v: boolean) => void;
  setSelectedTask: (v: ITask) => void;
  setIsTaskInfo: (v: boolean) => void;
}

const TaskItem: FC<Props> = ({
  task,
  onClick,
  setIsEditTask,
  setSelectedTask,
  setIsTaskInfo,
}) => {
  return (
    <div onClick={onClick} className={styles.task}>
      <div className="flex justify-between items-start">
        <div>
          <p className={styles.title}>{task.title}</p>
          <p className={styles.subject}>{task.subject}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setIsEditTask(true);
              setSelectedTask(task);
            }}
            className={styles.editBtn}
          >
            <AiOutlineEdit />
          </button>
          <button
            className={styles.infoBtn}
            onClick={() => {
              setIsTaskInfo(true);
              setSelectedTask(task);
            }}
          >
            <CgMore />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className={styles.date + " flex gap-2 items-center"}>
          {task.dateOfCompletion && <AiOutlineClockCircle />}
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
