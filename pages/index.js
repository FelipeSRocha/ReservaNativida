import React from "react";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";

import MenuPrincipal from "../components/MenuPrincipal";
import LandingHome from "../components/LandingHome";
import Description from "../components/Description";
import QuartosTab from "../components/QuartosTab";
import BackgroundImage from "../components/BackgroundImage";
import Fundo from "../public/img/Backgrounds/1.png";

export default function HomePage() {
    return (
      <>
        <MenuPrincipal />
        <LandingHome></LandingHome>
        <Corpo id="Primeiro">
          <BackgroundImage img={Fundo} />
          <SubCorpo>
            <Description key="test"></Description>
          </SubCorpo>
        </Corpo>
        <Corpo id="Segundo">
          <BackgroundImage img={Fundo} />
          <SubCorpo>
            <QuartosTab></QuartosTab>
          </SubCorpo>
        </Corpo>
        <Corpo id="Terceiro">
          <SubCorpo>
            <p>aaaaa</p>
          </SubCorpo>
        </Corpo>
      </>
    );
  }
  const Corpo = styled.div`
    min-height: ${lightTheme.heigthDiv.normal};
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
  `;
  
  const SubCorpo = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  
    width: ${lightTheme.widthDiv.proportional};
    max-width: ${lightTheme.widthDiv.maxWidth};
    min-width: ${lightTheme.breakPoint};
    margin: auto;
    height: ${lightTheme.heigthDiv.normal};
  
    @media (max-width: ${lightTheme.breakPoint}) {
      min-width: ${lightTheme.widthDiv.minWidth};
      height: fit-content;
    }
  `;
  