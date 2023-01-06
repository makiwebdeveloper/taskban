import { FC, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import styles from "./TaskBoard.module.scss";
import TaskItem from "./task-item/TaskItem";
import Layout from "../../layout/Layout";
import AddTask from "./add-task/AddTask";
import EditTask from "./edit-task/EditTask";
import { Popup } from "../../ui";
import { ITask, StatusType } from "../../../interfaces/task.interface";
import { useTasks } from "../../../contexts/TasksContext";
import { statuses } from "./tasks.data";
import { AddTaskDataType } from "./add-task/add-task-data.type";
import { EditTaskDataType } from "./edit-task/edit-task-data.type";

const TaskBoard: FC = () => {
  const { tasks, addTask, editTask } = useTasks();
  const [isAddTask, setIsAddTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const addTaskHandler = (formData: AddTaskDataType) => {
    if (selectedStatus) {
      addTask(formData, selectedStatus);
      setIsAddTask(false);
    }
  };

  const editTaskHandler = (formData: EditTaskDataType) => {
    if (selectedTask) {
      editTask(formData, selectedTask.id);
      setIsEditTask(false);
    }
  };

  useEffect(() => {
    !isAddTask && setSelectedStatus(null);
  }, [isAddTask]);

  useEffect(() => {
    !isEditTask && setSelectedTask(null);
  }, [isEditTask]);

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
                    <TaskItem
                      key={task.id}
                      task={task}
                      setIsEditTask={setIsEditTask}
                      setSelectedTask={setSelectedTask}
                    />
                  ))}
              </div>
            )}
          </div>
        ))}

        {/* ADD TASK POPUP */}
        {isAddTask && (
          <Popup setValue={setIsAddTask} className="w-[550px]">
            <AddTask addTaskHandler={addTaskHandler} />
          </Popup>
        )}
        {/* EDIT TASK POPUP */}
        {isEditTask && (
          <Popup setValue={setIsEditTask} className="w-[550px]">
            <EditTask
              editTaskHandler={editTaskHandler}
              selectedTask={selectedTask}
            />
          </Popup>
        )}
      </div>
    </Layout>
  );
};

export default TaskBoard;
