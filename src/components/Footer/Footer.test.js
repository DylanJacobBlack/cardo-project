import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  test("Renders the header", () => {
    render(<Footer />);
    const header = screen.getByText("Experience The Cardo");
    expect(header).toBeInTheDocument();
  })
});
