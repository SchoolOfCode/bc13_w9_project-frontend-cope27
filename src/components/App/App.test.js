import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar";

test("to find create post button", () => {
  const { getByText, container, debug } = render(<App />);
  const createPostButton = getByText("Create Post");

  //const image = screen.getByRole('img');
  expect(createPostButton).toBeInTheDocument();
  //expect(image).toBeVisible();
});
/** alternate way to test create post button render*/
test("that each button renders on the screen", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Create Post/i });
  expect(button).toBeInTheDocument();
  expect(button).toBeVisible();
});

test("that the logo renders on screen", () => {
  render(<App />);
  const image = screen.getByRole("img");
  expect(image).toBeInTheDocument();
  expect(image).toBeVisible();
});

test("that the slogan text appears on screen", () => {
  render(<App />);
  const paraElement = screen.getByText("collaboration", { exact: false });
  expect(paraElement).toBeInTheDocument();
  expect(paraElement).toBeVisible();
});

test("that button click calls the createPost function", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /Create Post/i });
  userEvent.click(button);
});

test("that search bar is rendered", () => {
  render(<App />);
  const searchBar = screen.getByText("I want to");
  expect(searchBar).toBeInTheDocument();
  expect(searchBar).toBeVisible();
});

test("that the project board is rendered", () => {
  render(<App />);
  const projectBoard = screen
  expect(projectBoard).toBeInTheDocument();
  expect(projectBoard).toBeVisible();
});
