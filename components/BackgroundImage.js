import React from "react";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";
import Image from "next/image";

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  top: 0;
  left: 0;
`;

export default function SubCorpoElement(props) {
  return (
    <BackgroundImage>
      <Image src={props.img} alt="fundo" layout="fill" objectFit="cover" />
    </BackgroundImage>
  );
}
