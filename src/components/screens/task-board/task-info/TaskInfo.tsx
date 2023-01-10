import { FC } from "react";
import { ITask } from "../../../../interfaces/task.interface";
import { Popup } from "../../../ui";
import styles from "./TaskInfo.module.scss";

interface Props {
  setIsTaskInfo: (v: boolean) => void;
  selectedTask: ITask | null;
}

const TaskInfo: FC<Props> = ({ selectedTask, setIsTaskInfo }) => {
  return (
    <Popup setValue={setIsTaskInfo} className={styles.wrapper}>
      <h1 className={styles.title}>Task Info</h1>
      <div className={styles.info}>
        <p>
          Title: <span>{selectedTask?.title}</span>
        </p>
        <p>
          Priority: <span>{selectedTask?.priority}</span>
        </p>
        <p>
          Status: <span>{selectedTask?.status}</span>
        </p>
        {selectedTask?.subject && (
          <p>
            Subject: <span>{selectedTask?.subject}</span>
          </p>
        )}
        {selectedTask?.description && (
          <p>
            Description: <span>{selectedTask?.description}</span>
          </p>
        )}
        {selectedTask?.dateOfCompletion && (
          <p>
            Date of completion: <span>{selectedTask?.dateOfCompletion}</span>
          </p>
        )}
        {selectedTask?.finishedAt && (
          <p>
            Finished at: <span>{selectedTask?.finishedAt}</span>
          </p>
        )}
      </div>
    </Popup>
  );
};

export default TaskInfo;

/*
export interface ITask {
  id: string;
  title: string;
  subject?: string;
  description?: string;
  dateOfCompletion?: string;
  finishedAt: string;
  status: StatusType;
  priority: PriorityType;
  createdBy: string;
}
 */
