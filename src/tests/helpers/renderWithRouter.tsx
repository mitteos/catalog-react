import React from "react";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {AppRouter} from "router";
import {Provider} from "react-redux";
import {store} from "store/store";

export const renderWithRouter = (component: React.ReactNode, initialRoute: string = "/") => {
    return (
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={[initialRoute]}>
                    {component}
                </MemoryRouter>
            </Provider>
        )
    )
}
