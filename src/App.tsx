import React, {useEffect} from 'react';
import {MainLayout} from "layouts";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {router} from "utils/routes";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {productActions} from "store/features/product";
import {initialBrandsCollection, initialProductsCollections, initialTypesCollection} from "utils/initialCollections";
import {brandActions} from "store/features/brand";
import {typeActions} from "store/features/type";

const App = () => {

    const {products} = useAppSelector(state => state.product)
    const {items: brands} = useAppSelector(state => state.brand)
    const {items: types} = useAppSelector(state => state.type)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!products.length) dispatch(productActions.setProducts(initialProductsCollections))
        if(!brands.length) dispatch(brandActions.setBrands(initialBrandsCollection))
        if(!types.length) dispatch(typeActions.setTypes(initialTypesCollection))
    }, [])

    return (
       <BrowserRouter>
           <MainLayout>
           <Routes>
               {router.map(route =>
                <Route key={route.id} path={route.path} element={route.element}/>
               )}
           </Routes>
           </MainLayout>
       </BrowserRouter>
    );
};

export default App;
