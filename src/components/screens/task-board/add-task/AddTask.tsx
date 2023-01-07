import { FC, useState } from "react";
import { Button, DateInput, Input, Popup, Textarea } from "../../../ui";
import styles from "./AddTask.module.scss";
import { AddTaskDataType } from "./add-task-data.type";
import SelectPriority from "../select-priority/SelectPriority";
import {
  PriorityType,
  StatusType,
} from "../../../../interfaces/task.interface";
import { useTasks } from "../../../../contexts/TasksContext";

interface Props {
  setIsAddTask: (v: boolean) => void;
  selectedStatus: StatusType | null;
}

const AddTask: FC<Props> = ({ setIsAddTask, selectedStatus }) => {
  const { addTask } = useTasks();
  const [addTaskData, setAddTaskData] = useState<AddTaskDataType>({
    title: "",
    subject: "",
    description: "",
    dateOfCompletion: "",
    priority: "high",
  });

  const addTaskHandler = (formData: AddTaskDataType) => {
    if (selectedStatus) {
      addTask(formData, selectedStatus);
      setIsAddTask(false);
    }
  };

  return (
    <Popup setValue={setIsAddTask} className="w-[550px]">
      <div className={styles.addTask}>
        <h1 className={styles.title}>New Task</h1>
        <Input
          value={addTaskData.title}
          onChange={(e) =>
            setAddTaskData({ ...addTaskData, title: e.target.value })
          }
          placeholder="Title"
        />
        <Input
          value={addTaskData.subject}
          onChange={(e) =>
            setAddTaskData({ ...addTaskData, subject: e.target.value })
          }
          placeholder="Subject"
        />
        <Textarea
          value={addTaskData.description}
          onChange={(e) =>
            setAddTaskData({ ...addTaskData, description: e.target.value })
          }
          placeholder="Description"
        />
        <div className="flex items-start justify-between">
          <div>
            <p className="text-dark-gray text-sm mb-2">Priority: </p>
            <SelectPriority
              value={addTaskData.priority}
              setValue={(value: PriorityType) =>
                setAddTaskData({ ...addTaskData, priority: value })
              }
            />
          </div>

          <div>
            <p className="text-dark-gray text-sm mb-2">Date of completion: </p>
            <DateInput
              type="date"
              value={addTaskData.dateOfCompletion}
              onChange={(e) =>
                setAddTaskData({
                  ...addTaskData,
                  dateOfCompletion: e.target.value,
                })
              }
            />
          </div>
        </div>
        <Button
          onClick={() => {
            if (addTaskData.title.length !== 0) {
              addTaskHandler(addTaskData);
            } else {
              alert("You must write (Title)");
            }
          }}
          className={styles.btn}
        >
          Add Task
        </Button>
      </div>{" "}
    </Popup>
  );
};

export default AddTask;
