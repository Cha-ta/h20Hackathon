import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "../../app/page";

describe("home page", () => {
  it("renders the normalized january 2016 default state", async () => {
    const page = await Home();

    render(page);

    expect(screen.getByText("January 2016")).toBeInTheDocument();
    expect(screen.getByText("San Joaquin County")).toBeInTheDocument();
    expect(screen.getByLabelText("Website homepage shell")).toBeInTheDocument();
    expect(screen.getByText("A website-format weather timeline for San Joaquin County.")).toBeInTheDocument();
    expect(screen.getByLabelText("Weather scene shell")).toBeInTheDocument();
  });
});
