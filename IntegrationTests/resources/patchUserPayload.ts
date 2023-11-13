import { randomInt } from "crypto";

const rand = randomInt(1000);
export const patchRequestPayload = {
  email: `talwar_aatrey_do_${rand}patch@wintheiser-murazik.test`,
};
