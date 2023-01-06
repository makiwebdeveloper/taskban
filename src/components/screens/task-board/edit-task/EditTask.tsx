import { FC, useState } from "react";
import styles from "./EditTask.module.scss";
import { EditTaskDataType } from "./edit-task-data.type";
import { ITask, PriorityType } from "../../../../interfaces/task.interface";
import { Button, DateInput } from "../../../ui";
import SelectPriority from "../select-priority/SelectPriority";
import { statuses } from "../tasks.data";

interface Props {
  selectedTask: ITask | null;
  editTaskHandler: (formData: EditTaskDataType) => void;
}

const EditTask: FC<Props> = ({ selectedTask, editTaskHandler }) => {
  const [editTaskData, setEditTaskData] = useState<EditTaskDataType>({
    dateOfCompletion: selectedTask?.dateOfCompletion,
    status: selectedTask?.status,
    priority: selectedTask?.priority,
  });

  return (
    <div className={styles.editTask}>
      <div>
        <h1 className={styles.title}>EditTask</h1>
        <h3 className="text-dark-gray mb-5">
          Task title:{" "}
          <span className={styles.taskTitle}>{selectedTask?.title}</span>
        </h3>
      </div>
      <div>
        <p className="text-dark-gray text-sm mb-2">
          Status: {selectedTask?.status && `(now: ${selectedTask?.status})`}
        </p>
        <ul className={styles.statuses}>
          {statuses.map((status) => (
            <li
              key={status.name}
              className={
                status.name !== editTaskData.status
                  ? styles.statusItem
                  : styles.activeStatusItem
              }
              onClick={() =>
                setEditTaskData({ ...editTaskData, status: status.name })
              }
            >
              {status.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-dark-gray text-sm mb-2">
            Priority:{" "}
            {selectedTask?.priority && `(now: ${selectedTask?.priority})`}
          </p>
          <SelectPriority
            value={editTaskData.priority}
            setValue={(value: PriorityType) =>
              setEditTaskData({ ...editTaskData, priority: value })
            }
          />
        </div>
        <div>
          <p className="text-dark-gray text-sm mb-2">
            Date of completion:{" "}
            {selectedTask?.dateOfCompletion &&
              `(now: ${selectedTask?.dateOfCompletion})`}
          </p>
          <DateInput
            value={editTaskData.dateOfCompletion}
            onChange={(e) =>
              setEditTaskData({
                ...editTaskData,
                dateOfCompletion: e.target.value,
              })
            }
          />
        </div>
      </div>
      <Button onClick={() => editTaskHandler(editTaskData)} className="p-2">
        Edit Task
      </Button>
    </div>
  );
};

export default EditTask;
