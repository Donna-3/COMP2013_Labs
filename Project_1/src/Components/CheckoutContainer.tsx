import type { CheckoutContainerProps } from "./ThriftHappens";
import CheckoutCard from "./CheckoutCard";

export default function CheckoutContainer({
  shoppingBag,
  handleDeleteFromBag,
}: CheckoutContainerProps) {
  return (
    <div className="CheckoutContainer">
      {shoppingBag.map((item) => (
        <CheckoutCard
          key={item.id}
          {...item}
          handleDeleteFromBag={handleDeleteFromBag}

        />
      ))}
    </div>
  );
}