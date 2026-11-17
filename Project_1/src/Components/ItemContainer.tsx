import ItemCard from "./ItemCard";
import type { ItemContainerProps } from "./ThriftHappens";

export default function ItemContainer(props: ItemContainerProps) {
    return (
        <div className="ItemContainer">
            {props.products.map((product) => (
                <ItemCard 
                key={product.id} 
                {...product} 
                handleAddToBag={props.handleAddToBag}
                />
            ))}
        </div>
);
}

  

