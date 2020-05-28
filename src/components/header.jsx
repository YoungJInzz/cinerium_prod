import React, { useState } from "react";
import Logo from "../resources/logowhite.svg";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [step, setStep] = useState("");
  return (
    <div>
      <header className="main-header">
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
            <li className="nav-li">영화</li>
            <li className="nav-li">예매</li>
            <ul>
              <li>빠른예매</li>
              <li>상영시간표</li>
            </ul>
            <li className="nav-li">극장</li>
            <li className="nav-li">이벤트</li>
          </ul>
        </section>
      </aside>
    </div>
  );
};
export default Header;
