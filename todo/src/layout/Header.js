import "../style/Header.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";

const menu = [
  {
    id: 0,
    label: "Home",
    url: "/",
    icon: <FaHome />,
  },
  {
    id: 1,
    label: "About",
    url: "/about",
    icon: <IoPersonSharp />,
  },
  {
    id: 2,
    label: "Contact",
    url: "/contact",
    icon: <FaPhone />,
  },
  {
    id: 3,
    label: "To Do List",
    url: "/todo",
    icon: <FaCheckDouble />,
  },
];

const Header = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        {menu.map((menu) => (
          <li key={menu.id}>
            <Link to={menu.url}>
              {menu.icon} {menu.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
