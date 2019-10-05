import React from "react";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import App from "./App";

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />); 
});

describe('app top-level component', () => {

  it('can debug the output', () => {
    tools.debug();
  });

  it("shows the word world cup", () => {
    const elementWithPlayer = tools.queryByText(/world cup/i);
    expect(elementWithPlayer).toBeInTheDocument();
  });

  it("shows the word change Background", () => {
    const elementWithPlayer = tools.queryByText(/Change Background/i);
    expect(elementWithPlayer).toBeInTheDocument();
  });

})



