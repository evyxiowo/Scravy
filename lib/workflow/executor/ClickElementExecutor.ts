import { ClickElementTask } from './../task/ClickElement';
import { ExecutionEnvironment } from "@/types/executor";

export async function ClickElementExecutor(
  environment: ExecutionEnvironment<typeof ClickElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("selector not found")
    }
    await environment.getPage()!.click(selector)

    return true;
  } catch (error: any) {
    environment.log.error(error.message)
    
    return false;
  }
}
