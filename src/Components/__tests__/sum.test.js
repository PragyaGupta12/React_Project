import { sum } from "../undesatndingTestCase";

test("sum of two numbers", () => {
  expect(sum(2, 3)).tobe(5); //we now dont need to import expect and tobe
});