import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AddTaskDataType } from "../components/screens/task-board/add-task/add-task.type";
import { db } from "../configs/firebase.config";
import { ITask, StatusType } from "../interfaces/task.interface";
import { v4 } from "uuid";

interface ITasksContext {
  addTask: (AddTaskData: AddTaskDataType, selectedStatus: StatusType) => void;
  updateTask: (
    AddTaskData: AddTaskDataType,
    selectedStatus: StatusType
  ) => void;
  removeTask: (id: string) => void;
  tasks: ITask[];
}

const TasksContext = createContext<ITasksContext | null>(null);
export const useTasks = () => useContext(TasksContext) as ITasksContext;

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = async (
    AddTaskData: AddTaskDataType,
    selectedStatus: StatusType
  ) => {
    const randomId = v4();

    const newTask: ITask = {
      id: randomId,
      ...AddTaskData,
      status: selectedStatus,
    };
    await setDoc(doc(db, "tasks", `${randomId}`), newTask);
  };

  const updateTask = () => {};

  const removeTask = () => {};

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
      const fetchedTasks: ITask[] = [];
      querySnapshot.forEach((doc) => {
        fetchedTasks.push(doc.data() as ITask);
      });
      setTasks(fetchedTasks);
    });

    return () => unsub();
  }, []);

  const value: ITasksContext = { addTask, tasks, updateTask, removeTask };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
