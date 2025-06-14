import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ARCJET_API_KEY, NODE_ENV } from "./env.js";

console.log(process.env.NODE_ENV);

const IS_DEV = NODE_ENV === "development";
console.log("Is Development Environment:", IS_DEV);

const aj = arcjet({
  key: ARCJET_API_KEY,
  characteristics: ["ip.src"], // Track requests by IP
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: IS_DEV ? "DRY_RUN" : "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
    tokenBucket({
      mode: IS_DEV ? "DRY_RUN" : "LIVE",
      refillRate: 5,
      interval: 10,
      capacity: 10,
    }),
  ],
});

export default aj;
