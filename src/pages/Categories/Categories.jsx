import { useContext } from "react";
import { CategoryCard } from "../../components";
import { CategoriesContext } from "../../contexts/CategoriesContext";
export default function Categories() {
  const categories = useContext(CategoriesContext);
  return (
    <div className="categories container-fluid">
      <div className="row mt-4">
        {categories &&
          categories.map((cat) => <CategoryCard key={cat} cat={cat} />)}
      </div>
    </div>
  );
}
