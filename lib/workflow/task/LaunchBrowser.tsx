import { TaskType } from "@/types/task";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
    type: TaskType.LAUNCH_BROWSER,
    label: (props: LucideProps) => (
        <GlobeIcon className="stroke-pink-400" {
            ...props}/>
    ),
    isEntryPoint: true,
}