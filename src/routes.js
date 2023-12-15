import React from 'react'
import ProductList from './Components/ProductList'
import {
    Route,

    Routes,

} from "react-router-dom";
import ContactPage from './Components/ContactPage';
import Cart from './Components/Cart';

import Home from './Components/Home';
const AppRoutes = () => {
    return (

        <Routes>

            <Route
                path="/"
                element={
                    <Home />
                }
            />   <Route
                path="/product-list"
                element={
                    <ProductList />
                }
            />   <Route
                path="/contact"
                element={
                    <ContactPage />
                }
            /> <Route
                path="/cart"
                element={
                    <Cart />}
            />
        </Routes>

    )
}

export default AppRoutes