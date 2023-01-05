import { FC, useState } from "react";
import { StatusType } from "../../../../interfaces/task.interface";
import { Button, DateInput, Input, Textarea } from "../../../ui";
import styles from "./AddTask.module.scss";
import { FormDataType } from "./form-data.type";
import SelectPriority from "./select-priority/SelectPriority";

interface Props {
  selectedStatus: StatusType | null;
}

const AddTask: FC<Props> = ({ selectedStatus }) => {
  const [formData, setFormData] = useState<FormDataType>({
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
      <Button className={styles.btn}>Add Task</Button>
    </div>
  );
};

export default AddTask;
