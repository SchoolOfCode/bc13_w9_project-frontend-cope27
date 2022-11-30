import { render, screen } from "@testing-library/react";
import ProjectBoard from "./index";
import { it, test, expect, describe } from "@jest/globals";

describe("ProjectBoard renders element for user", () => {
  it("ProjectBoard renders a ul element containing posts", () => {
    const posts = [
      {
        username: "Steph",
        projectgoal: "Build an API for helping people",
        projecttype: "Build",
        projecttools: "Express",
        collaborators: "4",
      },
    ];
    render(<ProjectBoard posts={posts} />);
    const projectBoard = screen.getByRole("list");
    console.log(projectBoard);
    expect(projectBoard).toBeVisible();
  });
});
