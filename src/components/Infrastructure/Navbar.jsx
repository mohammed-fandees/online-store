import { ImSearch } from "react-icons/im";
import { HiMiniUsers } from "react-icons/hi2"
import { BiSolidBellRing, BiSolidUserCircle } from "react-icons/bi"

export default function Navbar() {
  return (
    <nav className="navbar position-sticky top-0">
      <div className="container-fluid">
        <div className="search p-2"><ImSearch /></div>
        <div className="links p-2 d-flex gap-3">
          <HiMiniUsers />
          <BiSolidBellRing />
          <BiSolidUserCircle />
        </div>
      </div>
    </nav>
  )
}
