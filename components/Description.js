import React from "react";
import Image from "next/image";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";
import MataFundo from "../public/img/img/MataFundo.jpg";
import vinho from "../public/img/img/vinho.jpg";
import redario from "../public/img/img/Redario.jpg";
import rede from "../public/img/img/rede.jpg";
import pordosol from "../public/img/img/pordosol.jpg";

export default function Description() {
  return (
    <Container id="container">
      <Flex id="Flex">
        {/* <Image1 img={MataFundo}></Image1> */}
        <Image1 img={vinho}></Image1>
        <Image2 img={rede}></Image2>

        <Image2 img={pordosol}></Image2>
        <Image1 img={redario}></Image1>
      </Flex>
      <TextBox>
        <Header>A Reserva</Header>
        <div>
          <h2>Um lugar de paz e conforto</h2>
          <p>
            A Reserva Nativida é o local onde você encontra a combinação
            perfeita de conforto e tranquilidade, perfeito para te desacelerar e
            curtir um momento com a natureza, sem perder a oportunidade de
            aproveitar uma fogueira no frio e uma banheira com hidromassagem
          </p>
        </div>
      </TextBox>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  @media (max-width: ${lightTheme.breakPoint}) {
    flex-direction: column-reverse;
    padding-top: 80px;
    gap: 25px;
  }
`;
const TextBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 0;
  padding: 25px;
  width: 45%;
  background-color: ${lightTheme.colors.branco};
  @media (max-width: ${lightTheme.breakPoint}) {
    position: relative;
    width: 100%;
  }
  h2 {
    font-family: ${lightTheme.font.primary};
    font-weight: 300;
    font-size: ${lightTheme.fontSize.medium};
    color: ${lightTheme.colors.laranja};
    padding-top: 10px;
    margin: 0;
  }
  p {
    font-family: ${lightTheme.font.secundary};
    font-weight: 300;
    font-size: ${lightTheme.fontSize.small};
    color: ${lightTheme.colors.marrom};
    padding-top: 10px;
    margin: 0;
    text-align: justify;
  }
`;
const Header = styled.h1`
  padding-top: 25px;

  position: relative;
  font-family: ${lightTheme.font.primary};
  font-weight: 500;
  font-size: ${lightTheme.fontSize.big};
  letter-spacing: 5px;
  color: ${lightTheme.colors.laranja};
  margin: 0;
  @media (max-width: ${lightTheme.breakPoint}) {
    left: 0px;
    padding: 0px 0px;
  }
`;
const Flex = styled.div`
  position: absolute;
  right: 0;
  width: 60%;
  height: 80%;
  min-width: ${lightTheme.widthDiv.minWidth};
  gap: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-end;
  justify-content: space-between;
  @media (max-width: ${lightTheme.breakPoint}) {
    position: relative;
    width: 100%;
    height: 60vh;
    align-content: center;
  }
`;
const SubGrid1 = styled.div`
  position: relative;
  height: 100%;
  width: 32%;
`;
const SubGrid2 = styled.div`
  position: relative;
  height: 49%;
  width: 32%;
`;
function Image1(props) {
  return (
    <SubGrid1>
      <Image
        src={props.img}
        layout="fill"
        objectFit="cover"
        alt="corpo"
      ></Image>
    </SubGrid1>
  );
}
function Image2(props) {
  return (
    <SubGrid2>
      <Image
        src={props.img}
        layout="fill"
        objectFit="cover"
        alt="corpo"
      ></Image>
    </SubGrid2>
  );
}
