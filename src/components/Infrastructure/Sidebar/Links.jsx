import { Link } from "react-router-dom";
// import { BiSolidHomeSmile, BiSolidCategoryAlt } from "react-icons/bi";

export default function Links(props) {
  const { link } = props;
  return (
    <li>
      <Link className="link d-block px-3 rounded-2 mb-1" to={link.path}>
        {link.text}
      </Link>
    </li>
  );
}
