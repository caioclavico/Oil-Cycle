import { render, screen } from "@testing-library/react";
import { Input } from "../../components/Input";

describe("Input Component", () => {
  test("Should be able to render an Input", () => {
    render(<Input name="Email" placeholder="Email" />);

    expect(screen.getByPlaceholderText("Email")).toBeTruthy();
  });
});
