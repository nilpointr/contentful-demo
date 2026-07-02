import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ImagePlaceholder } from "./ImagePlaceholder";

describe("ImagePlaceholder", () => {
  it("shows a labeled placeholder by default", () => {
    render(<ImagePlaceholder label="Hero background" />);
    expect(screen.getByText("Image: Hero background")).toBeInTheDocument();
  });

  it("omits the label when showLabel is false", () => {
    render(<ImagePlaceholder label="Dave R." showLabel={false} />);
    expect(screen.queryByText(/Dave R\./)).not.toBeInTheDocument();
  });
});
