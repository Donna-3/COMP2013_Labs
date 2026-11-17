import { useState } from "react";
import { products as initialProducts, type ClothingProduct } from "../data/data";
import ItemContainer from "./ItemContainer";
import CheckoutContainer from "./CheckoutContainer";

export interface ItemContainerProps {
    products: ClothingProduct[];
    handleAddToBag: (
        id: number, 
        pickQuantity: number ) => void;
}

export interface CartItemProps {
    id: number;
    name: string;
    image: string;
    fit: string;
    category: string;
    color: string;
    description: string;
    size: string;
    price: number;
    quantity: number;
    itemQuantity: number;
}

export interface ItemCardFunctions extends ClothingProduct {
    handleAddToBag: (
        id: number, 
        pickQuantity: number) => void;
}

export interface CheckoutContainerProps {
    shoppingBag: CartItemProps[];
    handleDeleteFromBag: (id: number) => void;
}

export interface CheckoutCardFunctions extends CartItemProps {
    handleDeleteFromBag: (id: number) => void;
}

export default function ThriftHappens() {
    // States

    // 1. A state that handles all shopping bag
    const [products, setProducts] = useState<ClothingProduct[]>(initialProducts);
    
    // 2. A state that handles the shopping bag
    const [shoppingBag, setShoppingBag] = useState<CartItemProps[]>([]);
    
    // Calculate Total Price
    const totalPrice = shoppingBag.reduce(
        (sum, item) => sum + item.price * item.quantity,0
    );
    
    // Handlers
    
    // 1. Handle the onClick event to add to the bag
    function handleAddToBag(id: number, pickQuantity: number) {
        
        // Safety check to prevent adding 0
        if (pickQuantity <= 0) return;
        
        const selectedItem = products.find((item) => item.id === id);
        if (!selectedItem) return;
        
        const existingItem = shoppingBag.find((item) => item.id === id);
        
        // If the item is already in the bag, just update the quantity
        if (existingItem) {
            setShoppingBag((prevList) =>
                prevList.map((item) =>
                    item.id === id
            ? { ...item, quantity: item.quantity + pickQuantity }
            : item
            )
        );
    } else {
        // Otherwise, add the new item to the bag
        setShoppingBag((prevList) => [
            ...prevList,
            { ...selectedItem, quantity: pickQuantity },
        ]);
    }

    // Deduct the stock from the main products list
    setProducts((prevList) =>
        prevList.map((item) =>
            item.id === id
    ? { ...item, quantity: item.quantity - pickQuantity }
    : item
    )
);
}
    // 2. Handle onClick Event to delete an item from the bag
    function handleDeleteFromBag(id: number) {
        const deletingItem = shoppingBag.find((item) => item.id === id);
        if (!deletingItem) return;
        
        // Remove the item from the bag list
        setShoppingBag((prevList) => prevList.filter((item) => item.id !== id));
        
        // Return the stock to the main products list
        setProducts((prevList) =>
            prevList.map((item) =>
                item.id === id
        ? { ...item, quantity: item.quantity + deletingItem.quantity }
        : item
    )
);
}

    // 3. Handle the onClick Event to empty the bag
    function handleEmptyBag() {
        setProducts(initialProducts);
        setShoppingBag([]);
    }
    
    // Main return
    return (
    <div>
        <h1>Thrift Happens</h1>

        <div>
        <h2>Checkout</h2>
        
        {shoppingBag.length === 0 && <p> Shopping Bag is Empty</p>}
        
        <CheckoutContainer
        shoppingBag={shoppingBag}
        handleDeleteFromBag={handleDeleteFromBag}
        />
        
        {shoppingBag.length > 0 && (
            <div>
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
                <button onClick={handleEmptyBag}>
                    Empty Bag
                    </button>
                    </div>
                )}
                </div>
                
                <div>
                    <h2>Products</h2>
                    <ItemContainer
                    products={products}
                    handleAddToBag={handleAddToBag}
                    />
                    </div>
                    </div>
                    );
                }