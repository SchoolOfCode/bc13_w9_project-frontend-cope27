import { render, screen } from "@testing-library/react";
import ProjectBoard from "./index.js";
import { it, test, expect, describe } from "@jest/globals";

describe("ProjectBoard renders element for user", () => {
  it("ProjectBoard renders a ul element containing posts", () => {
    const projectPost = {
      username: "Steph",
      projectgoal: "Build an API for helping people",
      projecttype: "Build",
      projecttools: "Express",
      collaborators: "4",
    };
    render(<ProjectBoard posts={projectPost} />);
    const projectBoard = screen.getByRole("list");
    expect(projectBoard).toBeInDocument();
  });
});
