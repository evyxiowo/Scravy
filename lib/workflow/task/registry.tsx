import { TaskType } from "@/types/task";
import { LucideProps } from "lucide-react";
import { GripVerticalIcon } from "lucide-react";

// Updated Task type with `icon` property
export type Task = {
  type: TaskType;
  label: string; // Label text
  icon: React.ComponentType<LucideProps>; // Icon component type
  isEntryPoint: boolean;
};

// Now you can include `icon` in each task.
export const LaunchBrowserTask: Task = {
  type: TaskType.LAUNCH_BROWSER,
  label: "Launch Browser",
  icon: GripVerticalIcon, // Task icon
  isEntryPoint: true,
};

export const TaskRegistry: Record<TaskType, Task> = {
  [TaskType.LAUNCH_BROWSER]: LaunchBrowserTask,
};
