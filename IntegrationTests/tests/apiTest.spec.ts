import { errors, expect, test } from "playwright/test";
import { HTTPStatusCode } from "../models";
import {
  createUserPayload,
  patchRequestPayload,
  putRequestPayload,
} from "../resources";
import {
  postRequest,
  getRequest,
  deleteRequest,
  patchRequest,
  putRequest,
  logger,
} from "../utils/testUtils";

test.describe("Framework setup tests", () => {
  let USER_ID;

  test("should create a USER", async ({ request }) => {
    const _response = await postRequest(`/public/v2/users`, createUserPayload);

    await logger(`/public/v2/users`, HTTPStatusCode.CREATED, _response);

    const response_body = await _response.json();
    USER_ID = response_body.id;
    console.log(USER_ID);
    expect(await _response.ok()).toBeTruthy();
    expect(await _response.statusText()).toEqual("Created");
    expect(await _response.status()).toBe(HTTPStatusCode.CREATED);
  });

  test("should get a user", async ({ request }) => {
    const _getResponse = await getRequest(`/public/v2/users/${USER_ID}`);
    await logger(
      `/public/v2/users/${USER_ID}`,
      HTTPStatusCode.OK,
      _getResponse
    );
    expect(await _getResponse.status()).toBe(HTTPStatusCode.OK);
    expect(await _getResponse.json()).toBeDefined();
  });

  test("should patch a user", async ({ request }) => {
    const _patchResponse = await patchRequest(
      `/public/v2/users/${USER_ID}`,
      patchRequestPayload
    );
    await logger(
      `/public/v2/users/${USER_ID}`,
      HTTPStatusCode.OK,
      _patchResponse
    );
    expect(await _patchResponse.status()).toBe(HTTPStatusCode.OK);
    expect(await _patchResponse.json()).toBeDefined();
  });

  test("should put a user", async ({ request }) => {
    putRequestPayload.id = USER_ID;
    const _putResponse = await putRequest(
      `/public/v2/users/${USER_ID}`,
      putRequestPayload
    );
    await logger(
      `/public/v2/users/${USER_ID}`,
      HTTPStatusCode.OK,
      _putResponse
    );

    expect(await _putResponse.status()).toBe(HTTPStatusCode.OK);
    expect(await _putResponse.json()).toBeDefined();
  });

  test("should delete a user", async ({ request }) => {
    const _deleteResponse = await deleteRequest(`/public/v2/users/${USER_ID}`);
    await logger(
      `/public/v2/users/${USER_ID}`,
      HTTPStatusCode.NO_CONTENT,
      _deleteResponse
    );
    expect(await _deleteResponse.status()).toBe(HTTPStatusCode.NO_CONTENT);
  });
});
