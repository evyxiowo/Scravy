// import { waitFor } from '@/lib/helper/waitFor';
// import { Environment, ExecutionEnvironment } from '@/types/executor';
// import puppeteer from 'puppeteer';
// import { LaunchBrowserTask } from '../task/LaunchBrowser';

// const BROWSER_WS = "wss://brd-customer-hl_6dd635b2-zone-scro_browser:mcurays5xms0@brd.superproxy.io:9222";

// export async function LaunchBrowserExecutor(environment: ExecutionEnvironment<typeof LaunchBrowserTask>): Promise<boolean> {
//     try {
//         const websiteUrl = environment.getInput("Website Url");
//         const browser = await puppeteer.connect({
//             browserWSEndpoint: BROWSER_WS,
//         })
//         environment.log.info("Browser started successfully")
//         environment.setBrowser(browser)

//         const page = await browser.newPage()
//         page.setViewport({width: 1920, height: 1080});
//         // await page.authenticate({
//         //     username: "brd-customer-hl_6dd635b2-zone-scr_ow",
//         //     password: "f8x4q845r2ol"
//         // })
//         await page.goto(websiteUrl)
//         environment.setPage(page)
//         environment.log.info(`Opened page at: ${websiteUrl}`)

//         return true;
    // }catch (error: any) {
    //     environment.log.error(error.message)
    //     return false;
    // }
// }

import { ExecutionEnvironment } from "@/types/executor";
import puppeteer from "puppeteer";
import { LaunchBrowserTask } from "../task/LaunchBrowser";

export async function LaunchBrowserExecutor(
  environment: ExecutionEnvironment<typeof LaunchBrowserTask>
): Promise<boolean> {
  try {
    const websiteUrl = environment.getInput("Website Url");
    const browser = await puppeteer.launch({
      headless: true, // for testing
    });
    environment.log.info("Browser started successfully");
    environment.setBrowser(browser);

    const page = await browser.newPage();
    await page.goto(websiteUrl);
    environment.setPage(page);
    environment.log.info(`Opened page at: ${websiteUrl}`);

    return true;
  }catch (error: any) {
        environment.log.error(error.message)
        return false;
    }
}
