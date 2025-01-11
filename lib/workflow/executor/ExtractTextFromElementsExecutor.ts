import { ExecutionEnvironment } from "@/types/executor";
import { ExtractTextFromElementTask } from "../task/ExtractTextFromElement";
import * as cheerio from "cheerio";
export async function ExtractTextFromElementsExecutor(
  environment: ExecutionEnvironment<typeof ExtractTextFromElementTask>
): Promise<boolean> {
  try {
    const selector = environment.getInput("Selector")
    if (!selector) {
      environment.log.error("selector not found")
      return false;
    }
    const html =  environment.getInput("Html");
    if (!html) {
      environment.log.error("Html not found")
      return false;
    }
    const $ = cheerio.load(html);
    const element = $(selector);

    if (!element) {
      environment.log.error("element not found")
      return false;
    }
    const extractedText = $.text(element)
    if (!extractedText) {
      environment.log.error("element has no text")
      return false;
    }

    environment.setOutput("Extracted text", extractedText);
  
  return true;
  } catch (error: any) {
    environment.log.error(error.message);
    return false;
  }
}