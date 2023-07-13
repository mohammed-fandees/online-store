import "../infastructure.css";
import { LinksData } from "./LinksData";
import Links from "./Links";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo.png";

export default function Sidebar() {
  return (
    <div className="sidebar p-3">
      <div className="nav-brand">
        <Link to="/"><img src={Logo} alt="Logo" /></Link>
      </div>
      <ul className="sidebar-links d-flex flex-column text-center">
        {LinksData.map(link => (<Links key={link.id} link={link} />))}
      </ul>
    </div>
  )
}
