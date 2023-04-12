import {renderWithRouter} from "tests/helpers/renderWithRouter";
import {screen} from "@testing-library/react";
import {FullProductState} from "store/features/product/types";
import {ProductList} from "components/Catalog/ProductList/ProductList";
import * as ReduxHooks from "react-redux";

const products: FullProductState[] = [
    {id: 1, name: "Test 1", price: 100, vendor: 12, type: "test", sizeValue: 12, brand: "test", img: "", sizeType: "volume", typeId: [1], description: "test desc", barcode: "12412", brandId: 1, manufacturer: "test"},
    {id: 2, name: "Test 2", price: 100, vendor: 12, type: "test", sizeValue: 12, brand: "test", img: "", sizeType: "volume", typeId: [1], description: "test desc", barcode: "12412", brandId: 1, manufacturer: "test"},
]

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn(),
}));

describe("product list", () => {
    test("empty list", () => {
        jest.spyOn(ReduxHooks, "useSelector").mockReturnValue([])
        renderWithRouter(<ProductList />)
        const productList = screen.getByTestId("product-list")
        const emptyMessage = screen.getByTestId("empty-list")
        expect(emptyMessage).not.toBeNull()
        expect(productList).toMatchSnapshot()
    })
})
