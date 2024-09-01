import { sum } from "../sum";
import "@testing-library/jest-dom";

test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});
