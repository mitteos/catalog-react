import {ProductForm} from "components/AdminPanel/ProductForm/ProductForm";
import {screen} from "@testing-library/react";
import {renderWithRouter} from "tests/helpers/renderWithRouter";

describe("admin panel", () => {
    test("create product form", () => {
        renderWithRouter(<ProductForm isNewProduct={true} />)
        const form = screen.getByTestId("product-form")
        expect(form).toMatchSnapshot()
    })
})
