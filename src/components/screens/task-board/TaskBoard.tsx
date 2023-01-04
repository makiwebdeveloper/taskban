import { FC, useState } from "react";
import styles from "./TaskBoard.module.scss";
import { ITask } from "../../../interfaces/task.interface";
import { BsPlus } from "react-icons/bs";

import { fakeData, statuses } from "./tasks.data";
import TaskItem from "./task-item/TaskItem";

const TaskBoard: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>(fakeData);

  return (
    <div className={styles.taskBoard}>
      {statuses.map((status) => (
        <div key={status.name} className={styles.statusColumn}>
          <div className={styles.header}>
            <h3>
              {status.title}{" "}
              <span>
                ({tasks.filter((task) => task.status === status.name).length})
              </span>
            </h3>
            <button>
              <BsPlus />
            </button>
          </div>
          {tasks.filter((task) => task.status === status.name).length !== 0 && (
            <div className={styles.tasks}>
              {tasks
                .filter((task) => task.status === status.name)
                .map((task) => (
                  <TaskItem key={task.id} task={task} />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
