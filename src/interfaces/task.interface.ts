export type PriorityType = "low" | "medium" | "high";

export type StatusType = "idea" | "in progress" | "completed";

export interface ITask {
  id: string;
  title: string;
  subject?: string;
  description?: string;
  dateOfCompletion?: string;
  status: StatusType;
  priority: PriorityType;
}
