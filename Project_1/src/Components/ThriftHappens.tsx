import {products, type ClothingProduct } from "../data/data";
import ItemContainer from "./ItemContainer";

export interface ItemContainerProps {
    products : ClothingProduct[];
}

export default function ThriftHappens(){
    return (
        <div className="App">
          <header>
            <h1>Thrift Happens</h1>
          </header>
          <ItemContainer products={products} />
        </div>
      );
}