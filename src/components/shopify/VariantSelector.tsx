import * as React from "react";
import { Option, OptionValue } from "shopify-buy";
import { handleOptionChange } from "../../store/variants/actions";

interface IVariantSelectorProps {
  option: Option
}

export default function VariantSelector(props: IVariantSelectorProps) {
  const { option } = props;
  return (
    <select
      className="Product__option"
      name={option.name}
      key={option.name}
      onChange={(event) => handleOptionChange}
    >
      {option.values.map((value: OptionValue) => {
        return (
          <option
            value={value.value}
            key={`${option.name}-${value}`}
          >{`${value.name}`}</option>
        );
      })}
    </select>
  );
}
