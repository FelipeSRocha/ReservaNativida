import React from "react";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";
import Image from "next/image";

const Pop = styled.p`
  font-family: ${lightTheme.font.secundary};
  font-size: ${lightTheme.fontSize.smaller};
  color: ${lightTheme.colors.marrom};
  background-color: ${lightTheme.colors.laranja};
  padding: 10px;
  position: absolute;
  border-radius: 5px;
  bottom: 125%;
  margin: 0;
  text-align: center;
  display: none;
  min-width: 200%;
`;
const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  position: relative;
  &:hover ${Pop} {
    display: block;
  }
`;

export default function TextPop(props) {
  return (
    <Container>
      <Pop>{props.title}</Pop>
      <Image src={props.src} alt={props.title} objectFit="cover"></Image>
    </Container>
  );
}
