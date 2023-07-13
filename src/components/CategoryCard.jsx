import { Link, useParams } from "react-router-dom";

export default function CategoryCard(props) {
  const { cat } = props;
  const params = useParams();
  params.categoryName = cat;

  return (
    <div className="col-lg-6">
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <h5 className="card-title text-capitalize">{cat}</h5>
          <Link to={`/categories/${cat}`} className="btn btn-primary">
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
}
