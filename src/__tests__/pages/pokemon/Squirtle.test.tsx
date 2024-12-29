import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import Pokemon from "@/pages/pokemon/[name]";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: { name: "Squirtle" },
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock("@apollo/client", () => ({
  useQuery: jest.fn().mockReturnValue({
    data: {
      pokemon: {
        name: "Squirtle",
        types: ["Water"],
      },
    },
    loading: false,
  }),
}));

describe("Pokemon", () => {
  it("Renders a Bulbasaur", () => {
    render(<Pokemon />);
    const { getByText } = within(screen.getByTestId("Water"));
    expect(getByText("Water")).toBeInTheDocument();
  });
});
