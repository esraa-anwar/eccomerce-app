import React from 'react'
import ProductList from './Componetns/ProductList'
import {
    Route,
    Navigate,
    Routes,
    useLocation,
    useNavigate,
    useParams,
    Router
} from "react-router-dom";
import ContactPage from './Componetns/ContactPage';
import Cart from './Componetns/Cart';

import Home from './Componetns/Home';
const AppRoutes = () => {
    return (

        <Routes>
            {/* <Route path="/" element={redirectToHome()} /> */}
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