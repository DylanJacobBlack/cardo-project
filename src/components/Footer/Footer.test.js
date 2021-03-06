import { render, screen, act } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer tests", () => {
  test("Renders the header", () => {
    render(<Footer />);
    const header = screen.getByText("Experience The Cardo");
    expect(header).toBeInTheDocument();
  })

  // test("Loading spinner renders on load", () => {
  //   render(<Footer />);
  //   const loadingSpinner = screen.getAllByAltText("spinner");
  //   expect(loadingSpinner).toBeInTheDocument();
  // })
  
  test("renders buttons if request returns data" , async () => {
    render(<Footer />);
    const buttons = await screen.findAllByRole('button');
    expect(buttons).not.toHaveLength(0);
  })
});
