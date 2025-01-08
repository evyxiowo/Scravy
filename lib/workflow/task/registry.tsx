// import { TaskParamType, TaskType } from "@/types/task";
// import { LucideProps } from "lucide-react";
// import { GripVerticalIcon } from "lucide-react";

import { ExtractTextFromElementTask } from "./ExtractTextFromElement";
import { LaunchBrowserTask } from "./LaunchBrowser";
import { PageToHtmlTask } from "./PageToHtml";

export const TaskRegistry = { 
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
}
// // Updated Task type with `icon` property
// export type Task = {
//   type: TaskType;
//   label: string; // Label text
//   icon: React.ComponentType<LucideProps>; // Icon component type
//   isEntryPoint: boolean;
// };

// // Now you can include `icon` in each task.
// export const LaunchBrowserTask: Task = {
//   type: TaskType.LAUNCH_BROWSER,
//   label: "Launch Browser",
//   icon: GripVerticalIcon, // Task icon
//   isEntryPoint: true,
// };

// export const TaskRegistry = {
//   [TaskType.LAUNCH_BROWSER]: {
//       type: TaskType.LAUNCH_BROWSER,
//       label: "Launch Browser",
//       icon: GripVerticalIcon,
//       isEntryPoint: true,
//       inputs: [
//           { id: "url", name: "URL", type: TaskParamType.STRING },
//       ],
//   },
//   [TaskType.PAGE_TO_HTML]: {
//     type: TaskType.PAGE_TO_HTML,
//     label: "Page to HTML",
//     isEntryPoint: false,
//     inputs: [
//       { id: "url", name: "URL", type: TaskParamType.STRING },
//       { id: "outputPath", name: "Output Path", type: TaskParamType.STRING },
//     ],
//   }
// };

