import {screen} from "@testing-library/react";
import {renderWithRouter} from "tests/helpers/renderWithRouter";

describe("Header components",  () => {
    test("Header logo", () => {
        renderWithRouter(null)
        const logoElem = screen.findByAltText("logo")
        expect(logoElem).toMatchSnapshot()
    })
})
