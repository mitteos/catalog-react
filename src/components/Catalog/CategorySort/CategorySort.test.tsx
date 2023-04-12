import {CategorySort} from "components/Catalog/CategorySort/CategorySort";
import {renderWithRedux} from "tests/helpers/renderWithRedux";
import {fireEvent, screen} from "@testing-library/react";
import * as ReduxHooks from "react-redux";


const mockStoreState =
{
    items: [
        {id: 1, name: "test 1"},
        {id: 2, name: "test 2"},
        {id: 3, name: "test 3"},
    ]
}

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe("category test", () => {
    test("select category", async () => {
        jest.spyOn(ReduxHooks, "useSelector").mockReturnValue(mockStoreState)
        renderWithRedux(<CategorySort />)
        const btn = await screen.getByTestId("category-btn-1")
        fireEvent.click(btn)
        expect(screen.getByTestId("category-sort-container")).toMatchSnapshot()
    })
})
