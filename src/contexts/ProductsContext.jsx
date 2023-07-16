import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ProductsProvider(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/products")
      .then((res) => setProducts(res.data));
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
}
