import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Searchbar from "../Searchbar/index";
import '@testing-library/jest-dom'


// Mock the function passed as a prop for testing
const mockSearchSubmit = jest.fn();

describe("Searchbar Component", () => {
  it("renders the Searchbar component correctly", () => {
    const { getByPlaceholderText, getByText } = render(
      <Searchbar searchSubmit={mockSearchSubmit} />
    );

    // Assert that the component renders correctly
    expect(getByPlaceholderText("Search by ticker symbol...")).toBeInTheDocument();
    expect(getByText("Submit search")).toBeInTheDocument();
  });

  it("submits a search when the form is submitted", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Searchbar searchSubmit={mockSearchSubmit} />
    );

    // Simulate user input and form submission
    const searchInput = getByPlaceholderText("Search by ticker symbol...");
    fireEvent.change(searchInput, { target: { value: "AAPL" } });
    const submitButton = getByText("Submit search");
    fireEvent.click(submitButton);

    // Assert that the searchSubmit function was called with the correct value
    expect(mockSearchSubmit).toHaveBeenCalledWith("AAPL");

    // Assert that the input is cleared after submission
    expect(searchInput.value).toBe("");
  });
});
