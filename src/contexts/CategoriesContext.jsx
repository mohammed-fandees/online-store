import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const CategoriesContext = createContext();

export default function CategoriesProvider(props) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <CategoriesContext.Provider value={categories}>
      {props.children}
    </CategoriesContext.Provider>
  );
}
