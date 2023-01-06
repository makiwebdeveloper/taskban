import { FC, useEffect, useState } from "react";
import styles from "./TaskBoard.module.scss";
import { StatusType } from "../../../interfaces/task.interface";
import { BsPlus } from "react-icons/bs";
import TaskItem from "./task-item/TaskItem";

import { Popup } from "../../ui";
import { statuses } from "./tasks.data";
import Layout from "../../layout/Layout";
import { useTasks } from "../../../contexts/TasksContext";
import AddTask from "./add-task/AddTask";
import { AddTaskDataType } from "./add-task/add-task.type";

const TaskBoard: FC = () => {
  const { tasks, addTask } = useTasks();
  const [isAddTask, setIsAddTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);

  const addTaskHandler = (formData: AddTaskDataType) => {
    if (selectedStatus) {
      console.log(formData);
      addTask(formData, selectedStatus);
      setIsAddTask(false);
    }
  };

  useEffect(() => {
    !isAddTask && setSelectedStatus(null);
  }, [isAddTask]);

  return (
    <Layout>
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
              <button
                onClick={() => {
                  setIsAddTask(true);
                  setSelectedStatus(status.name);
                }}
              >
                <BsPlus />
              </button>
            </div>
            {tasks.filter((task) => task.status === status.name).length !==
              0 && (
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

        {/* ADD TASK POPUP */}
        {isAddTask && (
          <Popup setValue={setIsAddTask}>
            <AddTask addTaskHandler={addTaskHandler} />
          </Popup>
        )}
      </div>
    </Layout>
  );
};

export default TaskBoard;
