import { render, screen } from "@testing-library/react";
import App from "./App";
import { ThemeProvider } from "./Context/Theme";

test("should render the introduction heading with the owner's name", () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  expect(
    screen.getByRole("heading", { level: 1, name: /hello, i am viraj gupta/i })
  ).toBeInTheDocument();
});
