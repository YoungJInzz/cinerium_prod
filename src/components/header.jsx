import React, { useState } from "react";
import Logo from "../resources/logowhite.svg";
import { FaBars } from "react-icons/fa";
import { IoMdPower } from "react-icons/io";
import { BsCircleFill, BsCircle } from "react-icons/bs";
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
        <section className="login">
          <div className="loginBtn">
            <IoMdPower className="powerIcon" />
          </div>
          <div className="loginForm">
            <input className="loginInput" type="text" placeholder="id"></input>
            <input
              className="loginInput"
              type="password"
              placeholder="password"
            ></input>
          </div>
        </section>
        <section className="sidebar">
          <ul>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              영화(개발중)
            </li>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              예매
            </li>
            <ul>
              <li>빠른예매</li>
              <li>상영시간표</li>
            </ul>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              극장(개발중)
            </li>
            <li className="nav-li">
              <BsCircleFill className="circleFillIcon" />
              이벤트(개발중)
            </li>
          </ul>
        </section>
      </aside>
    </div>
  );
};
export default Header;
