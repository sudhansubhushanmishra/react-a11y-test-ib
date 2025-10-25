import { describe, it, expect } from "vitest";
import { add } from "./stringCalculator";

describe("add", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number itself when a single number is given", () => {
    expect(add("1")).toBe(1);
  });

  it("should return the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  it("should support different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  it("should throw an error on encountering a non-numeric string", () => {
    expect(() => add("1,a,2")).toThrow(
      "Invalid input: non-numeric value 'a' found.",
    );
  });

  it("should support floating point numbers", () => {
    expect(add("1.1,2.1")).toBe(3.2);
  });
});
