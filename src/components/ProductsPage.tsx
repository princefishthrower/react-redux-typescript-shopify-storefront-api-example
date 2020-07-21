import React from "react";
import Products from "./shopify/Products";

export default function ProductsPage() {
    return (
        <div>
            <h1>Whoa, here's a generic Products Page / Section Title!</h1>
            <p>And here's a paragraph tag within the product page!</p>
            <p>And here are your shop's products:</p>
            <Products />
        </div>
    );
}
