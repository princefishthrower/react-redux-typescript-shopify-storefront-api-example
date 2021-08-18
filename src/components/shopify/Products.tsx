import * as React from "react";
import ProductComponent from "./ProductComponent";
import { useSelector } from 'react-redux';
import { Product } from "shopify-buy";
import { RootState } from "../../store";

export default function Products() {
  const { products } = useSelector((state: RootState) => state.shopify)

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
