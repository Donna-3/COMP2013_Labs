import type { CheckoutCardFunctions } from "./ThriftHappens";

export default function checkoutCard({
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
    handleDeleteFromBag,
}: CheckoutCardFunctions) {
    const itemTotal = price * quantity;

    return (
        <div className="CheckoutCard">
            <p><b>{name}</b></p>
            <img src={image} alt="" width="150px" />
            <p>Fit: {fit}</p>
            <p>Category: {category}</p>
            <p>Color: {color}</p>
            <p>{description}</p>
            <p>Size: {size}</p>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Subtotal: ${itemTotal.toFixed(2)}</p>

            <button onClick={() => handleDeleteFromBag(id)}>Remove</button>
        </div>
    );
}

