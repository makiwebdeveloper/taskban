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
      <Input placeholder="Title" />
      <Input placeholder="Subject" />
      <Textarea placeholder="Description" />
      <div className="flex items-start justify-between">
        <div>
          <p className="text-dark-gray text-sm mb-2">Priority: </p>
          <SelectPriority formData={formData} setFormData={setFormData} />
        </div>

        <div>
          <p className="text-dark-gray text-sm mb-2">Date of completion: </p>
          <DateInput type="date" />
        </div>
      </div>
      <Button className={styles.btn}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTask;
