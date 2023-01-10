import { FC, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import styles from "./TaskBoard.module.scss";
import TaskItem from "./task-item/TaskItem";
import Layout from "../../layout/Layout";
import AddTask from "./add-task/AddTask";
import EditTask from "./edit-task/EditTask";
import { ITask, StatusType } from "../../../interfaces/task.interface";
import { useTasks } from "../../../contexts/TasksContext";
import { statuses } from "./tasks.data";
import SortTasks from "./sort-tasks/SortTasks";

const TaskBoard: FC = () => {
  const { tasks, sortByMonth } = useTasks();
  const [isAddTask, setIsAddTask] = useState(false);
  const [isEditTask, setIsEditTask] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | null>(null);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);
  const [sortDate, setSortDate] = useState("");

  useEffect(() => {
    !isAddTask && setSelectedStatus(null);
  }, [isAddTask]);

  useEffect(() => {
    !isEditTask && setSelectedTask(null);
  }, [isEditTask]);

  return (
    <Layout>
      <SortTasks sortDate={sortDate} setSortDate={setSortDate} />
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
            {(sortDate.length === 0 ? tasks : sortByMonth(sortDate)).filter(
              (task) => task.status === status.name
            ).length !== 0 && (
              <div className={styles.tasks}>
                {(sortDate.length === 0 ? tasks : sortByMonth(sortDate))
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
          <AddTask
            setIsAddTask={setIsAddTask}
            selectedStatus={selectedStatus}
          />
        )}
        {/* EDIT TASK POPUP */}
        {isEditTask && (
          <EditTask setIsEditTask={setIsEditTask} selectedTask={selectedTask} />
        )}
      </div>
    </Layout>
  );
};

export default TaskBoard;
