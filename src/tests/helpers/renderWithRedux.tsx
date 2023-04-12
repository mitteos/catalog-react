import React from "react";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "store/store";

export const renderWithRedux = (component: React.ReactNode) => {
    return (
        render(
            <Provider store={store}>
                {component}
            </Provider>
        )
    )
}
