import { APIRequestContext, APIResponse, request } from "playwright/test";
import { testData } from "../env.test";
import { HTTPStatusCode, HttpContentType } from "../models";

let context: APIRequestContext;
(async () => {
  // Create a context that will issue http requests.
  context = await request.newContext({
    baseURL: "https://gorest.co.in",
    extraHTTPHeaders: {
      Accept: HttpContentType.JSON,
      Authorization:
        "Bearer c9347e04e56e3df5ef5a2cfd4ab945d01848db65c0979734119d6b9220357831",
    },
  });
})();

export async function getRequest(url: string): Promise<APIResponse> {
  const response = await context.get(url);
  return response;
}

export async function postRequest(
  url: string,
  body: object
): Promise<APIResponse> {
  const response = await context.post(url, { data: body });
  return response;
}

export async function deleteRequest(url: string): Promise<APIResponse> {
  const response = await context.delete(url);
  return response;
}

export async function patchRequest(
  url: string,
  body: object
): Promise<APIResponse> {
  const response = await context.patch(url, { data: body });
  return response;
}
export async function putRequest(
  url: string,
  body: object
): Promise<APIResponse> {
  const response = await context.put(url, { data: body });
  return response;
}

export async function logger(
  url: string,
  expectedResponseCode: number,
  response: APIResponse
) {
  if ((await response).status() != expectedResponseCode) {
    console.warn(
      `Received HTTP ${(await response).status()} status from ${url}}`
    );
    console.warn(`Response text: ${await response.json()}`);
  }
  console.log(await response.status());
}
