

//to be defined for environment set up


import { request } from "@playwright/test";
import { testData } from "./env.test";
let envToRunTest: string;
let apiBaseURL: string;
let apimcode: string;
(async () => {
  // set environment variable
  envToRunTest = "dev"; //Change when running against other environment

  switch (envToRunTest) {
    case "dev":
      apiBaseURL: testData.dev.baseURL;
      apimcode: testData.dev.apimcode;
      break;
    case "local":
      apiBaseURL: testData.local.baseURL;
      apimcode: testData.local.apimcode;
    default:
      console.log("set envToRunTest in EnvironmentSetup.ts");
  }


 
})();
