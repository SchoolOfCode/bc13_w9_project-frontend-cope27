import { render, screen } from "@testing-library/react";
import SearchBar from "../SearchBar/index";
import userEvent from "@testing-library/user-event";
import { it, test, expect, describe } from "@jest/globals";

/*
    Queries accessible to everyone
    Reflect the experience of visual mouse users as well as those using assistive technology
*/

describe("SearchBar functions", () => {
  it("selects a type", () => {
    // get the type menu selector
    // select 'Build'
    // expect that Build is selected
    // expect that Pair and Study are not selected

    const menuValue = "Build";
    render(<SearchBar />);

    //const menu = screen.getByRole("combobox");
    const menuItem = screen.getByRole("option", { value: "Build" });

    expect(menuItem).toBeInTheDocument();
  });
});
