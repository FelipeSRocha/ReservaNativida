import React from "react";
import { useState } from "react";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";

import BoxSuite from "./BoxSuite";
import BoxChale from "./BoxChale";

export default function QuartosTab(props) {
    const [tabActive, setTabActive] = useState(1);
    const [sliderActive, setsliderActive] = useState(1);
    const ImageNumber = 2;

    function toggleState(index) {
        setTabActive(index);
    }
    function toggleSlider(index) {
        let result = sliderActive + index;
        if (result > ImageNumber) {
            result = 1;
        } else if (result < 1) {
            result = ImageNumber;
        }
        setsliderActive(result);
    }

    return (
        <Container id="Quartos_container">
            <Title>Conheça nossas acomodações</Title>
            <BoxSuite />
            <BoxChale />
        </Container>
    );
}

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 25px;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`;
const Title = styled.h1`
    font-family: ${lightTheme.font.primary};
    font-weight: 300;
    font-size: ${lightTheme.fontSize.big};
    color: ${lightTheme.colors.marrom};
    flex:100%;
    text-align:center;
    margin:0;
`;
