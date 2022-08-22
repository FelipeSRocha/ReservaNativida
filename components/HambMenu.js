import React from "react";
import styled from "styled-components";
import lightTheme from "../styles/theme/light";

export default function HambMenu(props) {
    return (
        <Hamburguer onClick={props.OpenMenu}>
            <span></span>
            <span></span>
            <span></span>
        </Hamburguer>
    );
}

const Hamburguer = styled.div`
    @media (max-width: ${lightTheme.breakPoint}) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 5px;
        margin-right:30px;
        cursor: pointer;
        span {
            background-color: #ff914d;
            border-radius: 1.5px;
            width: 40px;
            height: 6px;
        }
    }
`;
