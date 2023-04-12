import {fireEvent, render, screen} from "@testing-library/react";
import {SelectSort} from "components/Catalog/SelectSort/SelectSort";
import {Provider} from "react-redux";
import {store} from "store/store";

describe("Sort select", () => {
    test("toggle select", () => {
        render(
            <Provider store={store}>
                <SelectSort />
            </Provider>
            )
        const select = screen.getByTestId("sort-select")
        const selectContainer = screen.getByTestId("sort-select-container")
        expect(getComputedStyle(selectContainer).visibility).toBe("hidden")
        fireEvent.click(select)
        expect(getComputedStyle(selectContainer).visibility).toBe("visible")
        fireEvent.click(select)
        expect(getComputedStyle(selectContainer).visibility).toBe("hidden")
    })
})
