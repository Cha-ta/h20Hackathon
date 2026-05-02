import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../../app/page";

describe("home page", () => {
  it("renders the january 2016 default state with timeline controls", async () => {
    const page = await Home();

    render(page);

    expect(screen.getByText("January 2016")).toBeInTheDocument();
    expect(screen.getByLabelText("Website homepage shell")).toBeInTheDocument();
    expect(screen.getByLabelText("Weather scene shell")).toBeInTheDocument();
    expect(screen.getByLabelText("Timeline slider")).toBeInTheDocument();
    expect(screen.getByLabelText("Current weather snapshot")).toBeInTheDocument();
  });
});