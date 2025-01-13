// import { TaskParamType, TaskType } from "@/types/task";
// import { LucideProps } from "lucide-react";
// import { GripVerticalIcon } from "lucide-react";

import { TaskType } from "@/types/task";
import { ExtractTextFromElementTask } from "./ExtractTextFromElement";
import { LaunchBrowserTask } from "./LaunchBrowser";
import { FillInputTask } from "./FillInput";
import { WorkflowTask } from "@/types/workflow";
import { ClickElementTask } from "./ClickElement";
import { WaitForElementTask } from "./WaitForElement";
import { DeliverViaWebhookTask } from "./DeliverViaWebHook";
import { ReadPropertyFromJsonTask } from "./ReadPropertyFromJson";
import { AddPropertyToJsonTask } from "./AddPropertyToJson";
import { NavigateUrlTask } from "./NavigateUrlTask";
import { ScrollToElementTask } from "./ScrollToElement";
import { PageToHtmlTask } from "./PageToHtml";
import { ExtractDataWithAiTask } from "@/lib/workflow/task/ExtractDataWithAI";

type Registry = {
  [K in TaskType]: WorkflowTask & { type: K };
};


export const TaskRegistry = { 
  LAUNCH_BROWSER: LaunchBrowserTask,
  PAGE_TO_HTML: PageToHtmlTask,
  EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask,
  FILL_INPUT: FillInputTask,
  CLICK_ELEMENT: ClickElementTask,
  WAIT_FOR_ELEMENT: WaitForElementTask,
  DELIVER_VIA_WEBHOOK: DeliverViaWebhookTask,
  EXTRACT_DATA_WITH_AI: ExtractDataWithAiTask,
  READ_PROPERTY_FROM_JSON: ReadPropertyFromJsonTask,
  ADD_PROPERTY_TO_JSON: AddPropertyToJsonTask,
  NAVIGATE_URL: NavigateUrlTask,
  SCROLL_TO_ELEMENT: ScrollToElementTask,
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

