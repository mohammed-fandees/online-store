import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Manage() {

  return (
    <div className="manage">
      <div className="container-fluid">
        <h2 className="mt-3">Products Manager</h2>
        <div className="body">
          <Link to="create-product">
            <Button variant="success" className="my-2">
              Add Product
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
