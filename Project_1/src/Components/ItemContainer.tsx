import ItemCard from "./ItemCard";
import type { ItemContainerProps } from "./ThriftHappens";


export default function ItemContainer({ products }: ItemContainerProps) {
    return (
        <div className="ItemContainer">
            {products.map((product) => (
                <ItemCard key={product.id} {...product} />
            ))}
        </div>
);
}

  

