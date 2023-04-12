import React from 'react';
import {router} from "router/routes";
import {Route, Routes} from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            {router.map(route =>
                <Route key={route.id} path={route.path} element={route.element}/>
            )}
        </Routes>
    );
};
