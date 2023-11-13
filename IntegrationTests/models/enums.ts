export enum HttpContentType {
  JSON = "application/json",
  PDF = "application/pdf",
  BINARY = "application/octet-stream",
  X_WWW_FORM_URLENCODED = "application/x-www-form-urlencoded",
  XML = "application/xml",
}

export enum HTTPStatusCode {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  CONFLICT = 409,
  UNPROCESSABLE_ENTITY = 422,
  INTERNAL_SERVER_ERROR = 500,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
}
