import React, { useState } from "react";
import HambMenu from "./HambMenu";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import logo from "../public/img/img/logo.png";
import lightTheme from "../styles/theme/light";

export default function MenuPrincipal() {
  // const navigate = useNavigate();

  const [menuOpen, setmenuOpen] = useState("nav-bar");
  function OpenMenu() {
    if (menuOpen === "nav-bar") {
      setmenuOpen("nav-barActive");
    } else {
      setmenuOpen("nav-bar");
    }
  }
  function clickMenu(url) {
    navigate(url);
    setmenuOpen("nav-bar");
  }
  return (
    <MenuHeader key="MenuHeader">
      <Logo />
      <HambMenu OpenMenu={OpenMenu} />
      <ul className={menuOpen}>
        <li
        // onClick={() => {
        //     clickMenu("/");
        // }}
        >
          {" "}
          Home{" "}
        </li>
        <li
        // onClick={() => {
        //     clickMenu("/reservas");
        // }}
        >
          {" "}
          Reserve Já{" "}
        </li>
        <li
        // onClick={() => {
        //     clickMenu("/apousada");
        // }}
        >
          {" "}
          A Pousada{" "}
        </li>
        <li
        // onClick={() => {
        //     clickMenu("/");
        // }}
        >
          {" "}
          Acomodações{" "}
        </li>
        <li
        // onClick={() => {
        //     clickMenu("/sap");
        // }}
        >
          {" "}
          Conheça a cidade{" "}
        </li>
      </ul>
    </MenuHeader>
  );
}

const MenuHeader = styled.header`
  margin: 0;
  position: relative;
  top: 0;
  background-color: ${lightTheme.colors.branco};
  font-family: ${lightTheme.font.primary};
  font-size: ${lightTheme.fontSize.header};
  font-weight: 800;
  letter-spacing: 1px;
  color: ${lightTheme.colors.laranja};
  z-index: 2;
  height: ${lightTheme.heigthDiv.header};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  border-bottom: 3px solid ${lightTheme.colors.laranja};

  ul {
    list-style: none;
    display: flex;
    align-items: flex-end;
    margin: 0;
    height: 100%;
    width: ${lightTheme.widthDiv.proportional};
    max-width: ${lightTheme.widthDiv.maxWidth};
    padding: 0;
    li {
      padding: 0px 0px;
      border: none;
      cursor: pointer;
      transition: all 0.5s;
      height: 100%;
      width: 100%;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
    }
    li:hover {
      background-color: ${lightTheme.colors.laranja};
      font-size: ${lightTheme.fontSize.headerHover};
      color: ${lightTheme.colors.marrom};
    }
  }
  @media (max-width: ${lightTheme.breakPoint}) {
    align-items: flex-end;
    ul {
      position: absolute;
      width: 60vw;
      min-width: 250px;
      max-width: 330px;
      height: 40vh;
      top: 63px;
      flex-direction: column;
      background-color: ${lightTheme.colors.branco};
      align-items: center;
      justify-content: center;
      li {
        font-size: ${lightTheme.fontSize.headerMobile};
        border-bottom: 2px solid ${lightTheme.colors.laranja};
        border-left: 2px solid ${lightTheme.colors.laranja};
      }
    }
    .nav-bar {
      transform: translateX(105%);
      transition: transform 0.15s ease-in;
    }
    .nav-barActive {
      transform: translateX(0);
      transition: transform 0.15s ease-in;
    }
  }
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-size: cover;
  background-position: center center;
  position: absolute;
  left: 2vw;
  top: 8px;
  width: 50px;
  height: 50px;
  z-index: 1;
`;
