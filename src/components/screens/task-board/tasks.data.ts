import { ITask, StatusType } from "../../../interfaces/task.interface";

// DATE -> new Date().toISOString().slice(0, 10) 👨‍💻
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

export const fakeData: ITask[] = [
  {
    id: "1",
    title: "Ecommerce",
    subject: "Frontend",
    description: "Make ecommerce web site with Sanity",
    dateOfCompletion: "2023-01-04",
    status: "idea",
    priority: "low",
  },
  {
    id: "2",
    title: "GraphQl",
    subject: "Backend",
    description: "Make ecommerce web site with Sanity",
    status: "idea",
    priority: "low",
  },
  {
    id: "3",
    title: "Tree Game",
    subject: "Frontend",
    description: "Make ecommerce web site with Sanity",
    dateOfCompletion: "2023-01-04",
    status: "in progress",
    priority: "medium",
  },
];
