import { expect, test } from "vitest";
import { sum } from "../services/sum";

test("add 1 + 2 to equal 3", () => {
  console.log("let say 1 + 2 = 3 is correct?\n");
  expect(sum(1, 2)).toBe(3);
});
