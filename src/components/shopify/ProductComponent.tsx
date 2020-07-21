import React from "react";
import VariantSelector from "./VariantSelector";
import { Product } from "shopify-buy";
import { addVariantToCart } from "../../store/shopify/actions";
import { handleQuantityChange } from "../../store/variants/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

interface IProductProps {
  product: Product;
}

export default function ProductComponent(props: IProductProps) {
  const { product } = props;
  const variants = useSelector((state: RootState) => state.variants);
  const {
    selectedVariant,
    selectedVariantImage,
    selectedVariantQuantity,
  } = variants;
  const variantImage = selectedVariantImage || product.images[0];
  const variant = selectedVariant || product.variants[0];
  const variantQuantity = selectedVariantQuantity || 1;
  return (
    <div className="Product">
      {product.images.length ? (
        <img src={variantImage.src} alt={`${product.title} product shot`} />
      ) : null}
      <h5 className="Product__title">{product.title}</h5>
      <p>${variant.price}</p>
      {product.options.map((option) => {
        return <VariantSelector key={option.name} option={option} />;
      })}
      <label className="Product__option">
        Quantity:{" "}
        <input
          className="form-control"
          min="1"
          type="number"
          defaultValue={variantQuantity}
          onChange={(event) => handleQuantityChange}
        ></input>
      </label>
      <button
        className="Product__buy button"
        onClick={() => addVariantToCart(variant.id, variantQuantity)}
      >
        Add to Cart
      </button>
    </div>
  );
}
