import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectPost from "./index";

test("Checks that the component renders the props it is handed", () => {
  //   const props = {
  //     projectgoal: "Happiness",
  //     projecttype: "Build",
  //     projecttools: "React",
  //     username: "Vienna",
  //   };
  render(
    <ProjectPost
      projecttype={"Build"}
      projecttools={"React"}
      username={"Vienna"}
    />
  );

  const header = screen.getByRole("heading");

  expect(header).toHaveTextContent("Build", { name: "projectType" });

  const article = screen.getByRole("article");
  expect(article).toHaveTextContent("Happiness" && "React" && "Vienna", {
    exact: false,
  });
});
