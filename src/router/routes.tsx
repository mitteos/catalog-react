import {AdminEditProduct, AdminPanel, CartPage, CatalogPage, CheckoutPage, ProductPage} from "pages";
import {Navigate} from "react-router-dom";

export const router = [
    {id: 1, path: "/catalog", element: <CatalogPage />},
    {id: 2, path: "/cart", element: <CartPage />},
    {id: 3, path: "/cart/checkout", element: <CheckoutPage />},
    {id: 4, path: "/catalog/:id", element: <ProductPage />},
    {id: 5, path: "/admin", element: <AdminPanel />},
    {id: 6, path: "/admin/:id", element: <AdminEditProduct />},
    {id: 7, path: "*", element: <Navigate to="/catalog" replace={true} />},
]
