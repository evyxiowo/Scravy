import { ClickElementTask } from '../task/ClickElement';
import { ExecutionEnvironment } from "@/types/executor";
import { ScrollToElementTask } from '../task/ScrollToElement';

export async function ScrollToElementExecutor(
  environment: ExecutionEnvironment<typeof ScrollToElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector");
    if (!selector) {
      environment.log.error("selector not found")
    }
    await environment.getPage()!.evaluate((selector) => {
      const element = document.querySelector(selector);
      if (!element) {
        throw new Error(`Element not found by selector: ${selector}`);
      }
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top });
    }, selector)

    return true;
  } catch (error: any) {
    environment.log.error(error.message)
    
    return false;
  }
}
