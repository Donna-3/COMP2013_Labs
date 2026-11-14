import type { ClothingProduct } from "../data/data";

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
    itemQuantity,
}: ClothingProduct){
    return (
        <div className="ItemCard">
            <h2>{name}</h2>
            <img src={image} alt="" width="150px" />
            <p>Fit: {fit}</p>
            <p>Category: {category}</p>
            <p>Color: {color}</p>
            <p>Description: {description}</p>
            <p>Size: {size}</p>
            <p><b>Price</b>: {price}</p>
            <p><b>In Stock</b>: {quantity}</p>
            <p>{itemQuantity}</p> 
        </div>
    );
}