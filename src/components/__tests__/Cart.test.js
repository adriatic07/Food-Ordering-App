import { act, fireEvent, render, screen } from "@testing-library/react";
import Cart from "../Cart";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Mock_Data_Sample from "../../Mocks/RestaurantMenuMockData.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_Data_Sample),
  })
);

it("should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(22);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
