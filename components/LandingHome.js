import React from "react";
import styled from "styled-components";
import Image from "next/image";
import lightTheme from "../styles/theme/light";

import BackgroundImage from "./BackgroundImage";

import Foto from "../public/img/img/fotohome.jpg";
import MotorReserva from "./MotorReserva";

export default function LandingHome() {
  return (
    <BackgroundImg key="BackgroundImg">
      <Image src={Foto} layout="fill" objectFit="cover" alt="paisagem" />
      <ReservationTool key="ReservationTool">
        <MotorReserva/>
      </ReservationTool>

    </BackgroundImg>
  );
}

const BackgroundImg = styled.div`
  position: relative;
  z-index: 1;
  height: 75vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  border-bottom: 20px solid ${lightTheme.colors.laranja};
  @media (max-width: ${lightTheme.breakPoint}) {
    justify-content: center;
  }
`;
const ReservationTool = styled.div`
  margin-right: 10vw;
  background-color: #fcfeff;
  border: 3px solid ${lightTheme.colors.laranja};
  border-radius: 10px;
  position: relative;
  width: 20vw;
  min-width: 350px;
  height: 300px;
  transform: translate(0, 30%);
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 5px 5px 1px 1px #80808054; */
  @media (max-width: ${lightTheme.breakPoint}) {
    margin-right: 0px;
  }
`;
