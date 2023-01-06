import { PriorityType, StatusType } from "../../../../interfaces/task.interface";

export type EditTaskDataType = {
    dateOfCompletion?: string;
    status?: StatusType;
    priority?: PriorityType;
}