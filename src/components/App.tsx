import React from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";
import "../styles/shopify.css";
import ProductsPage from "./ProductsPage";
import Cart from "./shopify/Cart";
import Nav from "./Nav";
import { bootstrapShopify } from "../utils/utils";

export default function App() {
    // create the shopify client, initialize checkout, retrieve products, etc.
    bootstrapShopify();

    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This should be a super cool React and Shopify shop, but it's
                    just a boilerplate from{" "}
                    <a
                        href="https://medium.com/siren-apparel-press/adding-shopifys-storefront-api-to-an-existing-react-app-with-react-redux-ea442bd7543"
                        target="blank"
                        rel="no ref no oper"
                    >
                        this Medium post
                    </a>
                    .
                </p>
            </header>
            <Cart />
            <ProductsPage />
        </div>
    );
}
