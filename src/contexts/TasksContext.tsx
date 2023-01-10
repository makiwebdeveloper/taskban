import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AddTaskDataType } from "../components/screens/task-board/add-task/add-task-data.type";
import { db } from "../configs/firebase.config";
import { ITask, StatusType } from "../interfaces/task.interface";
import { v4 } from "uuid";
import { EditTaskDataType } from "../components/screens/task-board/edit-task/edit-task-data.type";
import { useAuth } from "./AuthContext";

interface ITasksContext {
  addTask: (AddTaskData: AddTaskDataType, selectedStatus: StatusType) => void;
  editTask: (formData: EditTaskDataType, selectedTaskId: string) => void;
  removeTask: (id: string) => void;
  tasks: ITask[];
  sortByMonth: (sortDate: string) => ITask[];
}

const TasksContext = createContext<ITasksContext | null>(null);
export const useTasks = () => useContext(TasksContext) as ITasksContext;

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const { currentUser } = useAuth();
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
      createdBy: currentUser ? currentUser.uid : "",
      finishedAt:
        selectedStatus === "completed"
          ? new Date().toJSON().slice(0, 10).replace(/-/g, "-")
          : "",
    };
    await setDoc(doc(db, "tasks", `${randomId}`), newTask);
  };

  const editTask = async (
    formData: EditTaskDataType,
    selectedTaskId: string
  ) => {
    await updateDoc(doc(db, "tasks", `${selectedTaskId}`), {
      ...formData,
      finishedAt:
        formData.status === "completed"
          ? new Date().toJSON().slice(0, 10).replace(/-/g, "-")
          : "",
    });
  };

  const removeTask = async (id: string) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const sortByMonth = (date: string) => {
    return tasks.filter((task) => task.dateOfCompletion?.slice(0, 7) === date);
  };

  useEffect(() => {
    const q = query(
      collection(db, "tasks"),
      where("createdBy", "==", `${currentUser?.uid}`)
    );

    const unsub = onSnapshot(q, (querySnapshot) => {
      const fetchedTasks: ITask[] = [];
      querySnapshot.forEach((doc) => {
        fetchedTasks.push(doc.data() as ITask);
      });
      setTasks(fetchedTasks);
    });

    return () => unsub();
  }, [currentUser]);

  const value: ITasksContext = {
    addTask,
    tasks,
    removeTask,
    editTask,
    sortByMonth,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
