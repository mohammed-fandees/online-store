import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const getProducts = async () => {
  const res = await axios.get("http://localhost:9000/products");
  return res.data;
};



export default function ProductsProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  console.log(products);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
}
