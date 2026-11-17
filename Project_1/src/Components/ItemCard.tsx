import { useState } from "react";
import type { ItemCardFunctions } from "./ThriftHappens";

export default function ItemCard({
    id,
    name, 
    image,
    fit,
    category,
    color,
    description,
    size,
    price,
    quantity,
    handleAddToBag,
}: ItemCardFunctions) {
    const [pickQuantity, setPickQuantity] = useState<number>(0);
    
    return (
        <div className="ItemCard">
            <h3>{name}</h3>
            <img src={image} alt="" width="150px" />
            <p>Fit: {fit}</p>
            <p>Category: {category}</p>
            <p>Color: {color}</p>
            <p>Description: {description}</p>
            <p>Size: {size}</p>
            <p><b>Price:</b> ${price.toFixed(2)}</p>
            <p><b>Stock:</b>{quantity}</p> 

            <button
            onClick={() => setPickQuantity((prev) => 
            Math.min(Math.max(prev + 1, 0), quantity))}
            disabled={quantity === 0} > 
            +
            </button>
            <span>{pickQuantity}</span>

            <button
            onClick={() => setPickQuantity((prev) => 
            Math.min(Math.max(prev - 1, 0), quantity))}
            disabled={quantity === 0} > 
            -
            </button>

            <br/>
            
            <button
                onClick={() => {
                    handleAddToBag(id, pickQuantity);
                    setPickQuantity(0);
                }}
                disabled={quantity === 0 || pickQuantity === 0}
                >
                Add to Cart
            </button>

            {quantity === 0 && <p>Sorry! Out of stock</p>}
            </div>
    );
}