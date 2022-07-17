import Counter from "./Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


it("should render without any error", () => {
    render(<Counter />)
});

it("should have ADD button", () => {
    render(<Counter />);
    let addButton = screen.getByTestId("add-button");

    expect(addButton).toHaveTextContent("ADD");
});

it("should have REDUCE button", () => {
    render(<Counter />);
    let reduceButton = screen.getByTestId("reduce-button");

    expect(reduceButton).toHaveTextContent("REDUCE");
})

it("should have initial count value as zero", () => {
    render(<Counter />);
    let counterValue = screen.getByTestId("count-value");
    expect(counterValue).toHaveTextContent(0);

});

it("onClick on add button should increment the count to 5", () => {
    render(<Counter />)
    let addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(screen.getByTestId("count-value")).toHaveTextContent(5);



})


it("onClick on REDUCE button should decrement the count to -5", () => {
    render(<Counter />)
    let reduceButton = screen.getByTestId("reduce-button");
    fireEvent.click(reduceButton);
    fireEvent.click(reduceButton);
    fireEvent.click(reduceButton);
    fireEvent.click(reduceButton);
    fireEvent.click(reduceButton);
    expect(screen.getByTestId("count-value")).toHaveTextContent(-5);


});

