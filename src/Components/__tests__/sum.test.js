import { sum } from "../undesatndingTestCase";

test("sum of two numbers", () => {
  expect(sum(3, 3)).toBe(6); //we now dont need to import expect and tobe
});