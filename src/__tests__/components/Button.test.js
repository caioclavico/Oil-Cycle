import { Button } from "@chakra-ui/react";
import { render, screen } from "@testing-library/react";

describe("Button Component", () => {
  test("Should be able to render an button", () => {
    render(<Button>Clique aqui</Button>);

    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });
});
