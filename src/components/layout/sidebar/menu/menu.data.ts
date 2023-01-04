import { AiOutlineHome } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { BsCardList } from "react-icons/bs";
import { IconType } from "react-icons";

interface IMenuItem {
  name: string;
  link: string;
  icon: IconType;
}

export const menuData: IMenuItem[] = [
  {
    name: "Home",
    link: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Task Board",
    link: "/task-board",
    icon: MdDashboard,
  },
  {
    name: "Habits",
    link: "/habits",
    icon: BsCardList,
  },
];
