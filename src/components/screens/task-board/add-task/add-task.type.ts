import { PriorityType } from "../../../../interfaces/task.interface";

export type AddTaskDataType = {
  title: string;
  subject: string;
  description: string;
  dateOfCompletion: string;
  priority: PriorityType;
};
