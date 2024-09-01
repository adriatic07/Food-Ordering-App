import { act, fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MockData from "../../Mocks/RestListMockData.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockData);
    },
  });
});
it("should filter the restaurant list on pizza search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const serachInput = screen.getByPlaceholderText("Search for restaurants");
  //console.log(serachInput);
  fireEvent.change(serachInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("resCard");
  //console.log(cards);

  expect(cards.length).toBe(5);
});

it("should filter the restaurant with top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurant",
  });

  fireEvent.click(topRatedBtn);
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(7);
});
