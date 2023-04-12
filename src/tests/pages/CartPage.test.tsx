import * as ReduxHooks from "react-redux";
import {initialProductsCollections} from "utils/initialCollections";
import {CartPage} from "pages";
import {screen} from "@testing-library/react";
import {renderWithRouter} from "tests/helpers/renderWithRouter";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

const mockState = {
    items: [
        {product: initialProductsCollections[0], count: 2},
        {product: initialProductsCollections[3], count: 6},
    ]
}

describe("cart page", () => {
    test("render with products", () => {
        jest.spyOn(ReduxHooks, "useSelector").mockReturnValue(mockState)
        renderWithRouter(<CartPage />)
        expect(screen.getByTestId("cart-page")).toMatchSnapshot()
    })
    test("render empty list", () => {
        jest.spyOn(ReduxHooks, "useSelector").mockReturnValue({items: []})
        renderWithRouter(<CartPage />)
        expect(screen.getByTestId("empty-list")).not.toBeNull()
    })
})
