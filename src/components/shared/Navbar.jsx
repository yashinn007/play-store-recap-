import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";
import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="container mx-auto navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content font-semibold bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/apps"}>Apps</NavLink>
              </li>
              <li>
                <NavLink to={"/install"}>Installation</NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>DashBoard</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={Logo} className="w-10" />
            <span className="text-purple-600 font-bold">
              <h1>HERO.IO</h1>
            </span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-semibold">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/install"}>Installation</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard"}>DashBoard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-purple-500 text-white">
            <FaGithub /> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
