import { FC, useState } from "react";
import { Button, DateInput, Input, Textarea } from "../../../ui";
import styles from "./AddTask.module.scss";
import { AddTaskDataType } from "./add-task.type";
import SelectPriority from "./select-priority/SelectPriority";

interface Props {
  addTaskHandler: (formData: AddTaskDataType) => void;
}

const AddTask: FC<Props> = ({ addTaskHandler }) => {
  const [formData, setFormData] = useState<AddTaskDataType>({
    title: "",
    subject: "",
    description: "",
    dateOfCompletion: "",
    priority: "high",
  });

  return (
    <div className={styles.addTask}>
      <h1 className={styles.title}>New Task</h1>
      <Input
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
      />
      <Input
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        placeholder="Subject"
      />
      <Textarea
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        placeholder="Description"
      />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-dark-gray text-sm mb-2">Priority: </p>
          <SelectPriority formData={formData} setFormData={setFormData} />
        </div>

        <div>
          <p className="text-dark-gray text-sm mb-2">Date of completion: </p>
          <DateInput
            value={formData.dateOfCompletion}
            onChange={(e) =>
              setFormData({ ...formData, dateOfCompletion: e.target.value })
            }
            type="date"
          />
        </div>
      </div>
      <Button onClick={() => addTaskHandler(formData)} className={styles.btn}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
