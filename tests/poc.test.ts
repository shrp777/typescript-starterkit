import { describe, expect, test } from "@jest/globals";
import Poc from "../src/classes/Poc";

describe("Proof of Concept", () => {
  test("Poc should be defined", () => {
    expect(Poc).toBeDefined();
  });
  test('Poc should return "Hello, World!"', () => {
    const demo: Poc = new Poc("World");
    expect(demo.hello()).toEqual("Hello, World!");
  });
});
