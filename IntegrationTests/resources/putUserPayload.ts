import { createUser } from "../models";
import { randomInt } from "crypto";

const rand = randomInt(1000);
export const putRequestPayload: createUser = {
  id: 5345170,
  name: "Aatreya Talwar DO",
  email: `talwar_aatrey_do_newput${rand}@wintheiser-murazik.test`,
  gender: "female",
  status: "active",
};
