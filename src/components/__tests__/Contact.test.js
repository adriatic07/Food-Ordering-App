import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getAllByRole("heading");
    //console.log(heading);

    expect(heading.length).toBe(2);
  });

  test("should load button inside contact us page component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should load input placeholder name in contact us page component", () => {
    render(<Contact />);
    //Querying
    const inputName = screen.getByPlaceholderText("name");
    //Assertion
    expect(inputName).toBeInTheDocument();
  });
});
