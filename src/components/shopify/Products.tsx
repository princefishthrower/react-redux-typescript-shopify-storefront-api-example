import * as React from "react";
import ProductComponent from "./ProductComponent";
import { Product } from "shopify-buy";
import { store } from "../../store";

export default function Products() {
  const { shopify } = store.getState();
  const { products } = shopify;

  if (products) {
    return (
      <div className="Product-wrapper">
        {products
          .map((product: Product) => {
            return (
              <ProductComponent
                key={product.id}
                product={product}
              />
            );
          })
          .reverse()}
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}
