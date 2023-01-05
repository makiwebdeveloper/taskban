import { PriorityType } from "../../../../interfaces/task.interface";

export type FormDataType = {
  title: string;
  subject: string;
  description: string;
  dateOfCompletion: string;
  priority: PriorityType;
};
