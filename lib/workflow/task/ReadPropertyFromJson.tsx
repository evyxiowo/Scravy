import { TaskParamType, TaskType } from "@/types/task";
import { WorkflowTask } from "@/types/workflow";
import { CodeIcon, FileJson2Icon, LucideProps, MousePointerClick, TextIcon } from "lucide-react";

export const ReadPropertyFromJsonTask = {
  type: TaskType.READ_PROPERTY_FROM_JSON,
  label: "Read property from JSON", // Task label
  icon: (props) => (
    <FileJson2Icon className="stroke-orange-400" {...props} /> // Correctly spread props
  ),
  isEntryPoint: false,
  credits: 1,
  inputs: [
    {
      name: "JSON",
      type: TaskParamType.STRING,
      required: true,
    },
    {
      name: "Property name",
      type: TaskParamType.STRING,
      required: true,
    },
  ]as const,
  outputs: [
    {
      name: "Property value",
      type: TaskParamType.STRING,
    },
    
  ] as const,
}satisfies WorkflowTask;
