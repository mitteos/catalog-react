import {fireEvent, screen} from "@testing-library/react";
import {renderWithRouter} from "tests/helpers/renderWithRouter";
import {AppRouter} from "router";

describe("Search input", () => {
    test("input event", () => {
        renderWithRouter(<AppRouter />)
        const input = screen.getByTestId<HTMLInputElement>("input")
        expect(input.value).toBe("")
        fireEvent.change(input, {
            target: {value: "123"}
        })
        expect(input.value).toBe("123")

    })
})
