import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import App from "../App";

// Tests
describe("Render main page correctly", async () => {
  it("Should render the page correctly", async () => {
    expect(true).toBeTruthy();
    // Setup
    render(<App />);
    const h3 = await screen.queryByText(
      "Vite + React + Redux + Node+ Express + Axios + Vitest + TypeScript + Docker",
    );

    // Expections
    expect(h3).not.toBeNull();
  });
});
