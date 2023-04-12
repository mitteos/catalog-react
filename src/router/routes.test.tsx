import {screen} from "@testing-library/react";
import "@testing-library/jest-dom"
import {renderWithRouter} from "tests/helpers/renderWithRouter";
import {AppRouter} from "router/AppRouter";

describe("Routes test", () => {
    test("Successful transition to the cart page", () => {
        renderWithRouter(<AppRouter />, "/cart")
        expect(screen.getByTestId("cart-page")).toBeInTheDocument()
    })
    test("Error page", () => {
        document.documentElement.scrollTo = () => {}
        renderWithRouter(<AppRouter />, "/awawgijoawjgo")
        expect(screen.getByTestId("main-page")).toBeInTheDocument()
    })
})
