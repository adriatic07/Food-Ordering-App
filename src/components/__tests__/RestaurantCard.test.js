import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../../Mocks/RestaurantCardMockData.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resdata={Mock_Data} />);

  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument();
});
