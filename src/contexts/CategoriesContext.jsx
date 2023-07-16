import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

export default function CategoriesProvider(props) {
  const [categories, setCategories] = useState();

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
