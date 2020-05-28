import React from "react";
import Logo from "../resources/logowhite.svg";
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <header>
        <a className="logotag" href="http://www.cinerium.net/">
          <img className="logo" src={Logo} alt=""></img>
        </a>
        <nav className="navbar">
          <FaBars className="bar-icon" />
        </nav>
      </header>
      <aside className="main-sidebar">
        <section className="sidebar">
          <ul>
            <li>영화</li>
            <li>예매</li>
            <li>극장</li>
            <li>이벤트</li>
          </ul>
        </section>
      </aside>
    </div>
  );
};
export default Header;
