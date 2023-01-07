import { StatusType } from "../../../interfaces/task.interface";

export const statuses: { title: string; name: StatusType }[] = [
  {
    title: "💡 Idea",
    name: "idea",
  },
  {
    title: "⚙️ In Progress",
    name: "in progress",
  },
  {
    title: "✔️ Completed",
    name: "completed",
  },
];
